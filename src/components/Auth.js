import { createContext, useContext, useEffect, useState } from "react";
import { auth, database } from "../firebase/client";
import md5 from "md5";

export const Context = createContext();

export const useAuth = () => useContext(Context);

export const useFirebaseAuth = () => {
  const signout = () => auth.signOut();

  return { signout };
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userData, setUserData] = useState(null);

  const getUserData = async (user) => {
    try {
      const res = await database.collection("users").doc(user.uid).get();
      setUserData(res.data());
      const hash = md5(user.email);

      if (res.data() === undefined) {
        const newUser = {
          uID: user.uid,
          username: user.displayName,
          email: user.email,
          avatar: user.photoURL || `https://www.gravatar.com/avatar/${hash}?d=identicon`,
        };
        await database.collection("users").doc(user.uid).set(newUser, { merge: true });
        setUserData(newUser);
        setLoadingUser(false);
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    const handleUser = (user) => {
      if (user) {
        setUser(user);
        getUserData(user);
        setLoadingUser(true);
      } else {
        setUser(false);
        setLoadingUser(false);
      }
    };
    const unsubscribe = auth.onAuthStateChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return (
    <Context.Provider value={{ user, loadingUser, userData, setUserData }}>
      {children}
    </Context.Provider>
  );
};
