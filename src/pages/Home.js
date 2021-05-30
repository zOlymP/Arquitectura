import React from "react";
import { useAuth } from "../components/Auth";
import LandingPage from "../components/LandingPage";
import Loader from "../components/Loader";
import Navbar from "../components/NavBar/Navbar";
import VideosContainer from "../components/VideosContainer";

export default function Home() {
  const { userData, loadingUser } = useAuth();

  return (
    <>
      {userData ? (
        <div>
          <Navbar />
          <VideosContainer />
        </div>
      ) : loadingUser ? (
        <Loader />
      ) : (
        <LandingPage />
      )}
    </>
  );
}
