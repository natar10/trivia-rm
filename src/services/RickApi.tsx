import { RICK_AND_MORTY_API } from "../common/constants";
import axios from "axios";
import { RMCharacter } from "../common/types";

class RickCharactersImpl {
  public getCharacters(page: number): Promise<RMCharacter[]> {
    return axios
      .get(`${RICK_AND_MORTY_API}/?page=${page}`)
      .then((response) => response.data.results)
      .catch((err) => {
        console.log(err);
      });
  }
}

export const RickCharacters = new RickCharactersImpl();
