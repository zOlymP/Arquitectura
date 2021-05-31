import React from "react";
import Searchbar from "./Searchbar";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles/VideoContainer.css";
import { AddCircleOutlineRounded as AddCircleOutlineRoundedIcon } from "@material-ui/icons";

export default function VideosContainer() {
  return (
    <div>
      <Searchbar />
      <div className="videoContainer">
        <Link to="crear">
          <Button variant="contained" color="primary" startIcon={<AddCircleOutlineRoundedIcon />}>
            Nuevo video
          </Button>
        </Link>
      </div>
    </div>
  );
}
