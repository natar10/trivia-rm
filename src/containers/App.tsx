import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { AppContextProvider } from "../context/AppContext";

import Home from "../pages/Home";
import Trivia from "../pages/Trivia";

const App = () => {
  return (
    <React.Fragment>
      <AppContextProvider>
        <Router>
          <Home path="/" />
          <Trivia path="/trivia" />
        </Router>
      </AppContextProvider>
    </React.Fragment>
  );
};

export default App;
