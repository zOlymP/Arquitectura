import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import LandingPage from "../pages/Home";
import LoginRegister from "../pages/LoginRegister";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginRegister} />
          <Route exact path="/register" component={LoginRegister} />
          {/* <Route exact path="/" /> */}
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
