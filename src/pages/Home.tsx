import React from "react";
import ReactDOM from "react-dom";
import BigTitle from "../components/layout/BigTitle";
import StartGame from "../components/game/StartGame";
import { AppContextProvider } from "../context/AppContext";
import GeneralModal from "../components/layout/Modal";
import { Props } from "../common/types";

const App: React.FC<Props> = (props: Props) => {
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
