import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { Link } from "react-router-dom";
import LoginRegisterLogo from "../images/LoginRegisterLogo.svg";
import ND from "../images/ND_text-black.svg";
// import GoogleIcon from "../components/buttons/icons/GoogleIcon";
// import GoogleButton from "../components/buttons/GoogleButton";
import "./styles/LoginRegister.css";
import "bootstrap/dist/css/bootstrap.css";
// import {
//   // loginWithGoogle,
//   onAuthStateChanged,
// } from "../firebase/client";

export default function LoginRegister({ match }) {
  return (
    <>
      <div className="LoginRegister">
        <div className="LoginRegister-form">
          <div>
            <Link to="/">
              <img src={ND} alt="Sinapsis UAO" className="LoginRegister-form-logo" />
            </Link>
          </div>

          {match.path === "/login" ? <Login /> : <Register />}

          <div className="LoginRegister-links-question">
            {match.path === "/login" ? (
              <span>
                ¿No tienes cuenta?
                <Link to="/register" className="LoginRegister-form-question-link">
                  <strong> Reg&iacute;strate</strong>
                </Link>
              </span>
            ) : (
              <span>
                ¿Ya tienes cuenta?
                <Link to="/login" className="LoginRegister-form-question-link">
                  <strong> Inicia sesi&oacute;n</strong>
                </Link>
              </span>
            )}
          </div>
          {/* <div className="GoogleButton-Container mt-4">
            {user === null && (
              <GoogleButton onClick={handleClickGoogle}>
                <GoogleIcon width={36} height={36}></GoogleIcon>
              </GoogleButton>
            )}
          </div> */}
          <div className="LoginRegister-form-links">
            <a
              className="LoginRegister-form-links-link"
              href="https://www.cali.gov.co/tic/publicaciones/1344/polticas_seguridad_de_la_informacin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pol&iacute;tica de tratamiento de Datos Personales
            </a>
            <a
              className="LoginRegister-form-links-link"
              href="https://www.cali.gov.co/tic/publicaciones/1344/polticas_seguridad_de_la_informacin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Transparencia y Acceso a la información P&uacute;blica
            </a>
            <a
              // href="https://abstractcode.co/"
              className="LoginRegister-form-links-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              © 2021 Narradores Digitales.
            </a>
          </div>
        </div>
        <div className="LoginRegister-content">
          <img src={LoginRegisterLogo} alt="Imagen" className="LoginRegister-content-image" />
        </div>
      </div>
    </>
  );
}
