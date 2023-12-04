import React from "react";
import BigTitle from "../components/layout/BigTitle";
import StartGame from "../components/game/StartGame";
import GeneralModal from "../components/layout/Modal";

const App: React.FC = () => {
  const myRef = React.createRef();
  return (
    <React.Fragment>
      <BigTitle />
      <StartGame />
      <GeneralModal />
    </React.Fragment>
  );
};

export default App;
