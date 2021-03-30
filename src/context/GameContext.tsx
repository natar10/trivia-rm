import React, { createContext, useContext, useState, useEffect } from "react";
import { RMCharacter, GameContextState, LoadingStatus } from "../common/types";
import { RickCharacters } from "../services/RickApi";
import { getRandomNumber } from "../common/constants";

const gameCtxt = createContext<GameContextState>({
  status: "LOADING",
  modal: {
    status: false,
  },
  points: 0,
  lifes: 3,
});

const Provider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<LoadingStatus>("LOADING");
  const [character, setCharacter] = useState<RMCharacter>();
  const [randomCharacters, setRandomCharacters] = useState<RMCharacter[]>();
  const [points, setPoints] = useState<number>(0);
  const [question, setQuestion] = useState<number>(1);
  const [lifes, setLifes] = useState<number>(3);
  const [characterNumber, setCharacterNumber] = useState<number>(
    getRandomNumber()
  );

  useEffect(() => {
    setLoading("LOADING");
    RickCharacters.getCharacter(characterNumber)
      .then((data: RMCharacter) => {
        setCharacter(data);
        RickCharacters.getRandomCharacters().then(
          (randomData: RMCharacter[]) => {
            setRandomCharacters(randomData);
            setLoading("LOADED");
          }
        );
      })
      .catch((err) => {
        console.log(err);
        setLoading("ERROR");
      });
  }, [characterNumber]);

  const check = (answer: number) => {
    if (answer === character!.id) {
      points < 100 ? setPoints(points + 10) : points;
    } else {
      setLifes(lifes - 1);
    }
    setQuestion(question + 1);
  };

  const restart = () => {
    setQuestion(1);
    setPoints(0);
    setLifes(3);
    setCharacterNumber(getRandomNumber());
  };

  const context: GameContextState = {
    status: loading,
    points: points,
    question: question,
    lifes: lifes,
    randomCharacters: randomCharacters,
    value: { character: character },
    gameControl: {
      nextCharacter: () => setCharacterNumber(getRandomNumber()),
      reset: () => restart(),
      updatePoints: (points: number) => setPoints(points),
      updateLifes: (lifes: number) => setLifes(lifes),
      updateQuestion: (question: number) => setQuestion(question),
    },
    modal: {
      status: isOpen,
      toogle: () => (isOpen ? setIsOpen(false) : setIsOpen(true)),
    },
  };

  return <gameCtxt.Provider value={context}>{children}</gameCtxt.Provider>;
};

export const GameContextProvider = Provider;

export function useGameContext() {
  return useContext(gameCtxt);
}
