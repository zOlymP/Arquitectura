import React from "react";
// Material UI Components
import { Paper, IconButton, InputBase, Divider, makeStyles } from "@material-ui/core";
// Iconos Material UI
import { Search as SearchIcon, Tune as TuneIcon } from "@material-ui/icons";
import { database } from "../firebase/client";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "auto",
    border: "1px solid rgba(0,0,0,0.20)",
    boxShadow: "unset !important",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  container: {
    padding: "1.875em 17%",
  },
}));

export default function Searchbar({ setData }) {
  const classes = useStyles();

  const handleInput = async (e) => {
    const users = await database
      .collection("clientes")
      .limit(10)
      .where("nombreBusqueda", ">=", e.target.value.trim().toLowerCase())
      .where("nombreBusqueda", "<=", e.target.value.trim().toLowerCase() + "\uf8ff")
      .get();

    const docs = [];

    users.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    setData(docs);
  };

  return (
    <div className={classes.container}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Buscar video"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={handleInput}
        />
        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
          <TuneIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          // type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
