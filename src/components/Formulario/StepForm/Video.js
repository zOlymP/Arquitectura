import React, { useEffect, useState } from "react";
import Navbar from "../../NavBar/Navbar";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { DoneAll as DoneAllIcon, ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Auth";
import bg1 from "../../../images/bg1.svg";
import bg2 from "../../../images/bg2.svg";
import bg3 from "../../../images/bg3.svg";
import bg4 from "../../../images/bg4.svg";
import p1 from "../../../images/p1.svg";
import p2 from "../../../images/p2.svg";
import p3 from "../../../images/p3.svg";
import p4 from "../../../images/p4.svg";
import p5 from "../../../images/p5.svg";
import p6 from "../../../images/p6.svg";
import p7 from "../../../images/p7.svg";
import p8 from "../../../images/p8.svg";
import { toast } from "react-toastify";

export default function Revision({ arduino, navigation }) {
  const { escenario, personaje1, personaje2, movimiento } = arduino;
  const history = useHistory();

  useEffect(() => {
    const setTarjeta = async () => {
      try {
        await fetch("http://localhost:8080/video", {
          method: "POST",
        });
      } catch (error) {
        toast.error("El servicio no esta disponible en estos momentos", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(error);
        history.push("/");
      }
    };

    setTarjeta();
  }, []);

  const { user } = useAuth();

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar />
      <div className="Form-Container">
        <h3 className="font-weight-bold main-title mt-3 mb-3">Video</h3>

        <div className="form">
          <div className="vistaPrevia-historia-grabar">
            {escenario === "1" ? (
              <div className="vistaPrevia-imageContainer">
                <img src={bg1} alt="escenario 1" />
              </div>
            ) : escenario === "2" ? (
              <div className="vistaPrevia-imageContainer">
                <img src={bg2} alt="escenario 2" />
              </div>
            ) : escenario === "3" ? (
              <div className="vistaPrevia-imageContainer">
                <img src={bg3} alt="escenario 3" />
              </div>
            ) : (
              escenario === "4" && (
                <div className="vistaPrevia-imageContainer">
                  <img src={bg4} alt="escenario 4" />
                </div>
              )
            )}
            {personaje1 === "1" ? (
              <div className="personaje1">
                <img src={p1} alt="personaje1 1" />
              </div>
            ) : personaje1 === "2" ? (
              <div className="personaje1">
                <img src={p2} alt="personaje1 2" />
              </div>
            ) : personaje1 === "3" ? (
              <div className="personaje1">
                <img src={p3} alt="personaje1 3" />
              </div>
            ) : (
              personaje1 === "4" && (
                <div className="personaje1">
                  <img src={p4} alt="personaje1 4" />
                </div>
              )
            )}
            {personaje2 === "1" ? (
              <div className="personaje2">
                <img src={p5} alt="personaje2 1" />
              </div>
            ) : personaje2 === "2" ? (
              <div className="personaje2">
                <img src={p6} alt="personaje2 2" />
              </div>
            ) : personaje2 === "3" ? (
              <div className="personaje2">
                <img src={p7} alt="personaje2 3" />
              </div>
            ) : (
              personaje2 === "4" && (
                <div className="personaje2">
                  <img src={p8} alt="personaje2 4" />
                </div>
              )
            )}
          </div>

          <div className="stepForm_buttons-container mt-3 mb-3">
            <Button
              color="secondary"
              className="mr-3"
              onClick={() => navigation.previous()}
              startIcon={<ArrowBackIcon />}
              variant="contained"
            >
              Atras
            </Button>
            <Button
              color="primary"
              endIcon={<DoneAllIcon />}
              // onClick={() => handleSubmit()}
              variant="contained"
            >
              Grabar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}