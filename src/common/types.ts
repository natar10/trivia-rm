import { MouseEventHandler } from "react";

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
      modalStatus: boolean;
    }
  | {
      status: "LOADED";
      points: number;
      question: number;
      lifes: number;
      randomCharacters: RMCharacter[] | undefined;
      value: GameContextInterface;
      modalStatus: boolean;
      toogleOpen?: () => void;
      reset?: () => void;
      checkAnswer?: (a: number) => void;
      nextCharacter?: () => void;
    };

export interface Props {
  path: string;
}
export interface ClueProps {
  episode: string | null;
}
