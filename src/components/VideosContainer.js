import React from "react";
import Searchbar from "./Searchbar";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function VideosContainer() {
  return (
    <div>
      <Searchbar />
      <div>
        <Link to="crear">
          <Button variant="contained" color="primary">
            Nuevo video
          </Button>
        </Link>
      </div>
    </div>
  );
}
