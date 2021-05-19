import React from "react";
import { useAuth } from "../components/Auth";
import LandingPage from "../components/LandingPage";
import Loader from "../components/Loader";

export default function Home() {
  const { userData, loadingUser } = useAuth();

  return (
    <>
      {userData ? (
        <div>
          <h1>{userData.username}</h1>
        </div>
      ) : loadingUser ? (
        <Loader />
      ) : (
        <LandingPage />
      )}
    </>
  );
}
