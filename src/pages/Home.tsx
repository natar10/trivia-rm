import React from "react";
import ReactDOM from "react-dom";
import BigTitle from "../components/layout/BigTitle";
import StartGame from "../components/game/StartGame";
import { AppContextProvider } from "../context/AppContext";
import GeneralModal from "../components/layout/Modal";
import { Props } from "../common/types";

const App: React.FC<Props> = (props: Props) => {
  const myRef = React.createRef();
  return (
    <React.Fragment>
      <AppContextProvider>
        <BigTitle />
        <StartGame />
        <GeneralModal />
      </AppContextProvider>
    </React.Fragment>
  );
};

export default App;
