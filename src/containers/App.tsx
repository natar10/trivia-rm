import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppContextProvider } from "../context/AppContext";

import Home from "../pages/Home";
import Trivia from "../pages/Trivia";
import Subscribe from "../pages/Subscribe";

const App = () => {
  return (
    <React.Fragment>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/trivia" element={<Trivia />}/>
          <Route path="/subscribe" element={<Subscribe />}/>
        </Routes>
      </AppContextProvider>
    </React.Fragment>
  );
};

export default App;
