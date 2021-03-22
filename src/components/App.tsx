import React from "react";
import ReactDOM from "react-dom";
import BigTitle from "./BigTitle";
import StartGame from "./StartGame";
import { AppContextProvider } from "../AppContext";
import GeneralModal from "./Modal";

const App = () => {
  return (
    <React.Fragment>
      <AppContextProvider>
        <BigTitle />
        <StartGame />
        {ReactDOM.createPortal(
          <GeneralModal />,
          document.getElementById("modal")!
        )}
      </AppContextProvider>
    </React.Fragment>
  );
};

export default App;
