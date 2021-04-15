import React from "react";
import { Router } from "@reach/router";
import { AppContextProvider } from "../context/AppContext";

import Home from "../pages/Home";
import Trivia from "../pages/Trivia";
import Subscribe from "../pages/Subscribe";

const App = () => {
  return (
    <React.Fragment>
      <AppContextProvider>
        <Router>
          <Home path="/" />
          <Trivia path="/trivia" />
          <Subscribe path="/subscribe" />
        </Router>
      </AppContextProvider>
    </React.Fragment>
  );
};

export default App;
