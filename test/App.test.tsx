import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Trivia from "../src/pages/Trivia";
import Home from "../src/pages/Home";
import Sinon from "sinon";
import { RickCharacters } from "../src/services/RickApi";
import { GameContextProvider } from "../src/context/GameContext";

const commonData = {
  status: "Alive",
  species: "Alien",
  gender: "Male",
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/28"],
};

const character = {
  id: 123345,
  name: "Guess Character",
  ...commonData,
};

const randomCharacter = [
  {
    id: 9871,
    name: "Random Character 1",
    ...commonData,
  },
  {
    id: 9872,
    name: "Random Character 2",
    ...commonData,
  },
  {
    id: 9873,
    name: "Random Character 3",
    ...commonData,
  },
];

const episode = {
  id: 28,
  name: "The Ricklantis Mixup",
  air_date: "September 10, 2017",
  episode: "S03E07",
  characters: ["https://rickandmortyapi.com/api/character/1"],
  url: "https://rickandmortyapi.com/api/episode/28",
  created: "2017-11-10T12:56:36.618Z",
};

beforeAll(() => {
  Sinon.stub(RickCharacters, "getCharacters").resolves([character]);
  Sinon.stub(RickCharacters, "getCharacter").resolves(character);
  Sinon.stub(RickCharacters, "getRandomCharacters").resolves(randomCharacter);
  Sinon.stub(RickCharacters, "getClue").resolves(episode);
});

describe("When the APP component is rendered", () => {
  it("returns the img from all the characters got by api", async () => {
    render(<Home path="/" />);
    await waitFor(() => {
      screen.getByText("PLAY");
      screen.getByAltText("Guess Character");
    });
  });
});

describe("When the Trivia component is rendered", () => {
  it("returns the single character for the question", async () => {
    render(<Trivia path="/trivia" />);
    await waitFor(() => {
      screen.getByText("Guess Character");
    });
  });

  it("service returns the random characters for the question", async () => {
    render(<Trivia path="/trivia" />);
    await waitFor(() => {
      screen.getByText("Random Character 1");
    });
  });
});
