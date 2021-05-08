import React from "react";
// Material UI Components
import { CircularProgress } from "@material-ui/core/";
// Estilos CSS
import "./styles/Loader.css";

export default function Loader() {
  return (
    <div className="Loader">
      <CircularProgress size="40px" />
    </div>
  );
}
