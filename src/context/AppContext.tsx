import React, { createContext, useContext } from "react";
import { RickCharacters } from "../services/RickApi";
import { useInterpret } from "@xstate/react";
import { triviaMachine } from "../machines/triviaMachine";
import { InterpreterFrom } from "xstate";
import { getRandomNumber } from "../common/constants";
import { useNavigate } from "react-router";

const ctxt = createContext({ stateService: {} as InterpreterFrom<typeof triviaMachine> });

const Provider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const stateService = useInterpret(triviaMachine, {
    actions: {
      goToTriviaPage: () => { console.log("navigating to trivia") 
      navigate("/trivia") }
    },
    services: {
      loadTriviaCharacters: async () => {
        const characters = await RickCharacters.getCharacters(Math.floor(Math.random() * 34))
        return characters
      },
      loadRandomCharacter: async () => {
        console.log("Load random character!")
        const character = await RickCharacters.getCharacter(getRandomNumber())
        console.log("The character is: //", character)
        return character;
      },
      loadRandomCharacters: async () => {
        console.log("LOAD RANDOM CHARACTERSSSS!!!!!")
        const randomCharacters = await RickCharacters.getRandomCharacters();
        return randomCharacters
      },
      loadClueInfo: async (context) => {
        const clue = await RickCharacters.getClue(context.randomCharacter!.episode[0])
        return clue
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
