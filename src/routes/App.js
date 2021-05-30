import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "../components/Auth";
import PageNotFound from "../pages/PageNotFound";
import LandingPage from "../pages/Home";
import LoginRegister from "../pages/LoginRegister";
import CrearHistoriaPage from "../pages/CrearHistoriaPage";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginRegister} />
          <Route exact path="/register" component={LoginRegister} />
          <Route exact path="/crear" component={CrearHistoriaPage} />
          {/* <Route exact path="/" /> */}
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
