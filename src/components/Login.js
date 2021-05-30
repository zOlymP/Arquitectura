import React, { useEffect, useState } from "react";
// Componentes Utilizados
import { Redirect } from "react-router-dom";
import { useAuth } from "./Auth";
import Loader from "./Loader";
// Estilos CSS
import "bootstrap/dist/css/bootstrap.css";
// MATERIAL UI Components
import { TextField } from "@material-ui/core";
import { auth } from "../firebase/client";

export default function Login() {
  const [form, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    document.title = "Narradores Digitales - Inicio de sesión";
  }, []);

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Función que envia los datos a Firebase
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});
    setLoading(true);

    auth.signInWithEmailAndPassword(`${form.email}`, form.password).catch((err) => {
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
        setErrors({
          incorrect: true,
        });
        setLoading(false);
      } else {
        setErrors({
          unexpected: true,
        });
        setLoading(false);
      }
    });
    setLoading(true);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1 className="text-center font-weight-bold mt-3 text-dark">Inicia Sesi&oacute;n</h1>
      <form className="login-grid" onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-basic"
          placeholder="Ej. pepito.perez@gmail.com"
          label="Correo el&eacute;ctronico"
          name="email"
          onChange={handleInput}
          disabled={loading}
          variant="outlined"
        />

        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          name="password"
          required
          inputProps={{
            maxLength: 12,
          }}
          onChange={handleInput}
          disabled={loading}
        />
        <input
          type="submit"
          className="LoginRegister-form-button"
          value="Inicar Sesión"
          disabled={loading}
        />
      </form>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="LoginRegister__error">
          <span>
            <ul>
              {errors.incorrect && (
                <li className="LoginRegister__errors--li">
                  El correo o la contraseña es incorrecto.
                </li>
              )}
              {errors.unexpected && (
                <li className="LoginRegister__errors--li">
                  Ocurri&oacute; un error al enviar la informaci&oacute;n. Por favor intenta de
                  nuevo.
                </li>
              )}
            </ul>
          </span>
        </div>
      )}
    </>
  );
}
