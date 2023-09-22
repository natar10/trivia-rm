import React, { createContext, useContext } from "react";
import { RickCharacters } from "../services/RickApi";
import { useInterpret } from "@xstate/react";
import { triviaMachine } from "../machines/triviaMachine";
import { InterpreterFrom } from "xstate";
import { getRandomNumber } from "../common/constants";

const ctxt = createContext({ stateService: {} as InterpreterFrom<typeof triviaMachine> });

const Provider: React.FC = ({ children }) => {
  const stateService = useInterpret(triviaMachine, {
    services: {
      loadTriviaCharacters: async () => {
        const characters = await RickCharacters.getCharacters(Math.floor(Math.random() * 34))
        return characters
      },
      loadRandomCharacter: async () => {
        const character = await RickCharacters.getCharacter(getRandomNumber())
        return character;
      },
      loadRandomCharacters: async () => {
        const randomCharacters = await RickCharacters.getRandomCharacters();
        return randomCharacters
      }
    },
    guards: {
      "lifes = 0": (context) => { return context.lifes == 0 },
      "points >= 100": (context) => { return context.points >= 100 }
    }
  })
  return <ctxt.Provider value={{ stateService }}>{children}</ctxt.Provider>;
};

export const AppContextProvider = Provider;

export function useAppContext() {
  return useContext(ctxt);
}
