// src/mocks/handlers.js
import { rest } from "msw";
import { RICK_AND_MORTY_API } from "../../src/common/constants";

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

export const handlers = [
  rest.get(`${RICK_AND_MORTY_API}`, (req, res, ctx) => {
    const query = req.url.searchParams;
    const page = query.get("page");
    const tester = res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ results: [character] })
    );
    return tester;
  }),

  rest.get(`${RICK_AND_MORTY_API}/:characterId`, (req, res, ctx) => {
    const resLenght = req.params.characterId.split(",").length;
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(resLenght > 1 ? randomCharacter : character)
    );
  }),

  rest.get(
    `https://rickandmortyapi.com/api/episode/:episodeId`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(episode));
    }
  ),
];
