import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import App from "../src/containers/App";
import Sinon from "sinon";
import { RickCharacters } from "../src/services/RickApi";

const character = {
  id: 123345,
  name: "Un personaje",
  status: "Alive",
  species: "Humano",
  gender: "Male",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/27"],
};

describe("When the APP component is rendered", () => {
  it("service returns the caracters", async () => {
    Sinon.stub(RickCharacters, "getCharacters").resolves([character]);
    const characters = await RickCharacters.getCharacters(
      Math.floor(Math.random() * 34)
    );
    expect(characters).toEqual([character]);
  });
  /*
  it("render returned character from API", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText("Un personaje")).toBeTruthy();
      expect(screen.getByText("Humano")).toBeTruthy();
    });
  });
  */
});
