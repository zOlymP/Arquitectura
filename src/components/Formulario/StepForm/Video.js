import React, { useState } from "react";
import Navbar from "../../NavBar/Navbar";
import md5 from "md5";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import {
  // TextField, FormControl, InputLabel, Select, MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  Button,
  IconButton,
  Snackbar,
} from "@material-ui/core";
import {
  ExpandMore as ExpandMoreIcon,
  Edit as EditIcon,
  DoneAll as DoneAllIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Auth";
import { database } from "../../../firebase/client";
// import MuiAlert from "@material-ui/lab/Alert";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

export default function Revision({ formData, navigation }) {
  const { go } = navigation;
  const {
    nombreCompleto,
    genero,
    tipoSangre,
    edad,
    estatura,
    peso,
    email,
    numeroDocumento,
    estadoCivil,
    direccion,
    telefono1,
    telefono2,
    numeroEmergencia,
    EPS,
    consultaMedica,
    tratamientoMedico,
    radiografias,
    motivoConsulta,
    enfermedadActual,
    antDiabetes,
    antCancer,
    antLeucemia,
    antCardiopatias,
    alergia,
    diabetes,
    cancer,
    leucemia,
    cardiopatias,
    cirugias,
    hospitalarios,
    psicologicos,
    HTA,
    consentimiento,
  } = formData;
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // Función que envia los datos a Firebase
  const handleSubmit = async (e) => {
    const hash = md5(email);

    try {
      await database
        .collection("clientes")
        .doc()
        .set(
          {
            fechaCreacion: firebase.firestore.FieldValue.serverTimestamp(),
            avatar: `https://www.gravatar.com/avatar/${hash}?d=identicon`,
            nombreCompleto: nombreCompleto,
            nombreBusqueda: nombreCompleto.trim().toLowerCase(),
            genero: genero,
            tipoSangre: tipoSangre,
            edad: edad,
            estatura: estatura,
            peso: peso,
            email: email,
            numeroDocumento: numeroDocumento,
            estadoCivil: estadoCivil,
            direccion: direccion,
            telefono1: telefono1,
            telefono2: telefono2 || "NO",
            numeroEmergencia: numeroEmergencia,
            EPS: EPS || "NO",
            consultaMedica: consultaMedica || "NO",
            tratamientoMedico: tratamientoMedico,
            radiografias: radiografias || "NO",
            motivoConsulta: motivoConsulta,
            enfermedadActual: enfermedadActual,
            antDiabetes: antDiabetes || "NO",
            antCancer: antCancer || "NO",
            antLeucemia: antLeucemia || "NO",
            antCardiopatias: antCardiopatias || "NO",
            alergia: alergia,
            diabetes: diabetes,
            cancer: cancer,
            leucemia: leucemia,
            cardiopatias: cardiopatias,
            cirugias: cirugias || "NO",
            hospitalarios: hospitalarios || "NO",
            psicologicos: psicologicos || "NO",
            HTA: HTA,
            consentimiento: consentimiento,
          },
          { merge: true }
        );
      setLoading(false);
      setOpen(true);
      history.push("/");
    } catch (error) {
      setLoading(false);
      setErrors(error);
    }
  };

  const { user } = useAuth();

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar />
      <div className="Form-Container">
        <h1>Video</h1>

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
            onClick={() => handleSubmit()}
            variant="contained"
          >
            Grabar
          </Button>
        </div>
      </div>
    </>
  );
}

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <h5>{summary}</h5>
    </AccordionSummary>
    <AccordionDetails>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return (
            <ListItemText className="w-100" key={index}>
              <div className="w-100">
                <h6>{objKey}</h6>
                <p>{objValue}</p>
              </div>
            </ListItemText>
          );
        })}
        <IconButton
          onClick={() => {
            go(`${summary}`);
          }}
        >
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetails>
  </Accordion>
);
