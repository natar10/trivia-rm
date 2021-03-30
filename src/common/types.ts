import { ReactNode } from "react";
export interface AppContextInterface {
  characters: RMCharacter[];
}
export interface GameContextInterface {
  character: RMCharacter | undefined;
}

export type RMCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  episode: string[];
};

export type RMEpisode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type LoadingStatus = "LOADING" | "ERROR" | "LOADED";

export type ContextState =
  | { status: "LOADING" | "ERROR"; modalStatus: boolean }
  | {
      status: "LOADED";
      value: AppContextInterface;
      modalStatus: boolean;
      toogleOpen?: () => void;
    };

export type GameContextState =
  | {
      status: "LOADING" | "ERROR";
      points: number;
      lifes: number;
      modal: Modal;
    }
  | {
      status: "LOADED";
      points: number;
      question: number;
      lifes: number;
      randomCharacters: RMCharacter[] | undefined;
      value: GameContextInterface;
      modal: Modal;
      gameControl: {
        reset?: () => void;
        nextCharacter?: () => void;
        updatePoints: (points: number) => void;
        updateLifes: (lifes: number) => void;
        updateQuestion: (question: number) => void;
      };
    };

interface Modal {
  status: boolean;
  toogle?: () => void;
}
export interface Props {
  path: string;
}
export interface ClueProps {
  episode: string | null;
}

export interface PropsNode {
  children: ReactNode;
}

export interface State {
  hasError: boolean;
}
