import React, {
  useEffect,
  useState,
  // , useContext
} from "react";
// Estilos
import "bootstrap/dist/css/bootstrap.css";
// Componente Utilizadps
import { Redirect } from "react-router-dom";
import { useAuth } from "./Auth";
import Loader from "./Loader";
// Material UI Components
import { TextField } from "@material-ui/core";
import { auth } from "../firebase/client";

export default function Login() {
  const [form, setValues] = useState({
    username: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    document.title = "Narradores Digitales - Registro";
  }, []);

  // Función para saber lo que el usuario escribe
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Función que envia los datos a Firebase
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email.trim()) {
      setErrors({
        emailTrim: true,
      });
      return null;
    }
    setErrors({});
    setLoading(true);
    if (form.password === form.confirmPassword) {
      auth
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((userCredentials) => {
          return userCredentials.user.updateProfile({
            displayName: form.nombre,
          });
        })

        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            setErrors({
              email: true,
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
    } else {
      setErrors({
        password: true,
      });
    }
    setLoading(false);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div>
        <h1 className="text-center font-weight-bold text-dark">
          ¡Dale vida a las ideas de los mas pequeños!
        </h1>
        <form className="register-grid" onSubmit={handleSubmit}>
          <TextField
            label="Nombre Completo"
            type="text"
            name="nombre"
            required
            multiline
            autoComplete="off"
            inputProps={{
              maxLength: 45,
            }}
            placeholder="Ej. Pepito Perez"
            variant="outlined"
            onChange={handleInput}
            disabled={loading}
          />
          <TextField
            className="txtField MuiOutlinedInput-notchedOutline MuiFormLabel-root"
            label="Correo el&eacute;ctronico"
            variant="outlined"
            type="text"
            name="email"
            autoComplete="off"
            required
            placeholder="Ej. pepito.perez"
            onChange={handleInput}
            disabled={loading}
          />

          <TextField
            className="txtField MuiOutlinedInput-notchedOutline MuiFormLabel-root"
            autoComplete="off"
            label="Contraseña"
            type="password"
            name="password"
            variant="outlined"
            required
            inputProps={{
              maxLength: 12,
            }}
            onChange={handleInput}
            disabled={loading}
          />
          <TextField
            className="txtField MuiOutlinedInput-notchedOutline MuiFormLabel-root"
            label="Confirmar contraseña"
            variant="outlined"
            type="password"
            autoComplete="off"
            name="confirmPassword"
            inputProps={{
              maxLength: 12,
            }}
            required
            onChange={handleInput}
            disabled={loading}
          />
          <input
            type="submit"
            className="LoginRegister-form-button register-grid-division mt-3 "
            value="Registrarse"
            disabled={loading}
          />
        </form>
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className="login-register__errors">
            <span>
              <ul>
                {errors.password && (
                  <li className="LoginRegister__errors--li">Las contraseñas no coinciden.</li>
                )}
                {errors.email && (
                  <li className="LoginRegister__errors--li">
                    Este correo institucional ya se encuentra registrado.
                  </li>
                )}
                {errors.emailTrim && (
                  <li className="LoginRegister__errors--li">
                    El nombre de usuario no debe tener espacios.
                  </li>
                )}
                {errors.unexpected && (
                  <li className="LoginRegister__errors--li">
                    Ocurri&oacute; un error al enviar la informaci&oacute;n. Por favor intentelo
                    nuevamente.
                  </li>
                )}
              </ul>
            </span>
          </div>
        )}
      </div>
    </>
  );
}
