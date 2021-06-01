import React, { useState } from "react";
import Navbar from "../../NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/style.css";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { useAuth } from "../../Auth";
import { Redirect } from "react-router-dom";
import bg1 from "../../../images/bg1.svg";
import bg2 from "../../../images/bg2.svg";
import bg3 from "../../../images/bg3.svg";
import bg4 from "../../../images/bg4.svg";
import nada from "../../../images/nada.svg";
import p1 from "../../../images/p1.svg";
import p2 from "../../../images/p2.svg";
import p3 from "../../../images/p3.svg";
import p4 from "../../../images/p4.svg";
import p5 from "../../../images/p5.svg";
import p6 from "../../../images/p6.svg";
import p7 from "../../../images/p7.svg";
import p8 from "../../../images/p8.svg";

const useStyles = makeStyles((theme) => ({
  detailsContainer: {
    width: "290px",
  },
}));

export default function Personaje1({ formData, setForm, navigation }) {
  const { escenario, personaje1, personaje2 } = formData;
  const classes = useStyles();

  const { user } = useAuth();
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar />
      <div className="Form-Container">
        <h3 className="font-weight-bold main-title mt-3 mb-3">Selecci&oacute;n</h3>
        <div className="form">
          <div className="vistaPrevia-historia">
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
            ) : escenario === "4" ? (
              <div className="vistaPrevia-imageContainer">
                <img src={bg4} alt="escenario 4" />
              </div>
            ) : (
              <div className="vistaPrevia-imageContainer">
                <img src={nada} alt="escenario 3" />
              </div>
            )}
          </div>
          <div className={classes.detailsContainer}>
            <div className="escenario-historia ">
              {escenario === "1" ? (
                <div className="images-imageContainer">
                  <img src={bg1} alt="escenario 1" />
                </div>
              ) : escenario === "2" ? (
                <div className="images-imageContainer">
                  <img src={bg2} alt="escenario 2" />
                </div>
              ) : escenario === "3" ? (
                <div className="images-imageContainer">
                  <img src={bg3} alt="escenario 3" />
                </div>
              ) : escenario === "4" ? (
                <div className="images-imageContainer">
                  <img src={bg4} alt="escenario 4" />
                </div>
              ) : (
                <div className="images-imageContainer">
                  <img src={nada} alt="Sin escenario" />
                </div>
              )}
            </div>
            <div className="personajes-container">
              <div className="personajes-historia mt-3">
                {personaje1 === "1" ? (
                  <div className="images-imageContainer">
                    <img src={p1} alt="personaje 1" />
                  </div>
                ) : personaje1 === "2" ? (
                  <div className="images-imageContainer">
                    <img src={p2} alt="personaje 2" />
                  </div>
                ) : personaje1 === "3" ? (
                  <div className="images-imageContainer">
                    <img src={p3} alt="personaje 3" />
                  </div>
                ) : personaje1 === "4" ? (
                  <div className="images-imageContainer">
                    <img src={p4} alt="personaje 4" />
                  </div>
                ) : (
                  <div className="images-imageContainer">
                    <img src={nada} alt="Sin personaje" />
                  </div>
                )}
              </div>
              <div className="personajes-historia mt-3">
                {personaje2 === "1" ? (
                  <div className="images-imageContainer">
                    <img src={p5} alt="personaje 1" />
                  </div>
                ) : personaje2 === "2" ? (
                  <div className="images-imageContainer">
                    <img src={p6} alt="personaje 2" />
                  </div>
                ) : personaje2 === "3" ? (
                  <div className="images-imageContainer">
                    <img src={p7} alt="personaje 3" />
                  </div>
                ) : personaje2 === "4" ? (
                  <div className="images-imageContainer">
                    <img src={p8} alt="personaje 4" />
                  </div>
                ) : (
                  <div className="images-imageContainer">
                    <img src={nada} alt="Sin personaje" />
                  </div>
                )}
              </div>
            </div>
            <TextField
              autoFocus
              className="mt-2"
              defaultValue={personaje1}
              label="Personaje 1 "
              name="personaje1"
              onChange={setForm}
              variant="outlined"
            />
          </div>
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
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigation.next()}
            variant="contained"
            disabled={!personaje1}
          >
            Continuar
          </Button>
        </div>
      </div>
    </>
  );
}
