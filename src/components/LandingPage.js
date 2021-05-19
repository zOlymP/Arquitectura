import React from "react";
import { Link } from "react-router-dom";
import "./styles/LandingPage.css";
import "bootstrap/dist/css/bootstrap.css";

export default function LandingPage() {
  return (
    <div className="landing-container ">
      <header className="header-landing ">
        <Link className="header-landing__logo link" to="/">
          <img src="../images/ND_text.svg" alt="Logo ND" />
        </Link>
        <div className="header-landing__container ">
          <Link className="header-landing__login textlink link text-light" to="/login">
            Iniciar sesi&oacute;n
          </Link>
          <Link className="landing__button--header landing__button link text-dark" to="/register">
            Registrate gratis
          </Link>
        </div>
      </header>
      <div className="fadeIn landing-container__main">
        <div className="landing-container__text">
          <h1 className="landing-container__main--h1">Virtualiza las historias de tus hijos.</h1>
        </div>
        <div className="landing-container__text--p">
          <p className="landing-container__main--p">
            Narradores digitales busca promocionar la lectoescritura y otros lenguajes expresivos
            desde la primera infancia.
          </p>
        </div>
        <div className="landing-container__button-hero">
          <Link className="landing__button__main landing__button link text-dark" to="/register">
            <span>Empieza ahora!</span>
          </Link>
        </div>
      </div>
      <div>
        <img
          className="landing-container__illustration"
          src="../images/landing_bg.svg"
          alt="ideas illustration"
        />
      </div>
    </div>
  );
}
