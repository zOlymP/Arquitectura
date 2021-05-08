import React, {
  useEffect,
  useState,
  // , useContext
} from "react";
// Estilos
import "bootstrap/dist/css/bootstrap.css";
// Componente Utilizadps
import Loader from "./Loader";
// Material UI Components
import { TextField } from "@material-ui/core";

export default function Login() {
  const [loading] = useState(false);
  const [errors] = useState({});

  useEffect(() => {
    document.title = "Narradores Digitales - Registro";
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center font-weight-bold text-dark">
          ¡Dale vida a las ideas de los mas pequeños!
        </h1>
        <form className="register-grid">
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
          />
          <input
            type="submit"
            className="LoginRegister-form-button register-grid-division mt-3 "
            value="Registrarse"
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
