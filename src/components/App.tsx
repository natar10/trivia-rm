import React from "react";
import Header from "./Header";
import BigTitle from "./BigTitle";
import CharactersGrid from "./CharactersGrid";
import { AppContextProvider } from "../AppContext";

const App = () => {
  return (
    <React.Fragment>
      <AppContextProvider>
        <BigTitle />
        <CharactersGrid />
      </AppContextProvider>
    </React.Fragment>
  );
};

export default App;
