import React, {
  useEffect,
  useState,
  // , useContext
} from "react";
// Componentes Utilizados
import Loader from "./Loader";
// Estilos CSS
import "bootstrap/dist/css/bootstrap.css";
// MATERIAL UI Components
import TextField from "@material-ui/core/TextField";

export default function Login() {
  const [loading] = useState(false);
  const [errors] = useState({});

  useEffect(() => {
    document.title = "Narradores Digitales - Inicio de sesión";
  }, []);

  return (
    <div>
      <h1 className="text-center font-weight-bold mt-3 text-dark">Inicia Sesi&oacute;n</h1>
      <form className="login-grid">
        <TextField
          label="Correo el&eacute;ctronico"
          name="email"
          required
          placeholder="Ej. pepito.perez@gmail.com"
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
        />
        <input type="submit" className="LoginRegister-form-button" value="Inicar Sesión" />
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
    </div>
  );
}
