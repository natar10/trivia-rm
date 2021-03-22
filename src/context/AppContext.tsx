import React, { createContext, useContext, useState, useEffect } from "react";
import { RMCharacter, ContextState, LoadingStatus } from "../common/types";
import { RickCharacters } from "../services/RickApi";

const ctxt = createContext<ContextState>({
  status: "LOADING",
  modalStatus: false,
});

const Provider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<LoadingStatus>("LOADING");
  const [characters, setCharacters] = useState<RMCharacter[]>([]);

  useEffect(() => {
    RickCharacters.getCharacters(Math.floor(Math.random() * 34))
      .then((data: RMCharacter[]) => {
        setCharacters(data);
        setLoading("LOADED");
      })
      .catch((err) => {
        console.log(err);
        setLoading("ERROR");
        setCharacters([]);
      });
  }, []);

  const context: ContextState = {
    status: loading,
    value: { characters: characters },
    modalStatus: isOpen,
    toogleOpen: () => (isOpen ? setIsOpen(false) : setIsOpen(true)),
  };

  return <ctxt.Provider value={context}>{children}</ctxt.Provider>;
};

export const AppContextProvider = Provider;

export function useAppContext() {
  return useContext(ctxt);
}
