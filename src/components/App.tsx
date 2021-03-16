import React, { useEffect, useState } from "react";
import Header from "./Header";
import BigTitle from "./BigTitle";
import Character from "./Character";
import axios from "axios";

interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

const App = () => {
  const [characters, setCharacters] = useState<CharacterData[]>();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <BigTitle />
      <div className="container">
        {characters ? (
          <div className="row">
            {characters.map((character) => {
              return (
                <div key={character.id} className="col-md-4">
                  <Character characterData={character} />
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No characters loaded yet</h2>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default App;
