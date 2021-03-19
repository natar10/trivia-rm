export interface AppContextInterface {
  characters: RMCharacter[];
}

export type RMCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

export type ContextState =
  | { status: "LOADING" | "ERROR" }
  | { status: "LOADED"; value: AppContextInterface };
