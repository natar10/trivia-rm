import React, { createContext, useContext, useState, useEffect } from "react";
import { RMCharacter, ContextState } from "./common/types";
import { RickCharacters } from "./services/RickApi";

const ctxt = createContext<ContextState>({ status: "LOADING" });

const Provider: React.FC = ({ children }) => {
  const [characters, setCharacters] = useState<ContextState>({
    status: "LOADING",
  });

  useEffect(() => {
    RickCharacters.getCharacters()
      .then((data: RMCharacter[]) => {
        setCharacters({
          status: "LOADED",
          value: { characters: data },
        });
      })
      .catch((err) => {
        setCharacters({ status: "ERROR" });
      });
  }, []);

  return <ctxt.Provider value={characters}>{children}</ctxt.Provider>;
};

export const AppContextProvider = Provider;

export function useAppContext() {
  return useContext(ctxt);
}
