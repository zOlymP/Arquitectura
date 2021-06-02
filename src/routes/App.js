import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "../components/Auth";
import PageNotFound from "../pages/PageNotFound";
import LandingPage from "../pages/Home";
import LoginRegister from "../pages/LoginRegister";
import CrearHistoriaPage from "../pages/CrearHistoriaPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <AuthContextProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
