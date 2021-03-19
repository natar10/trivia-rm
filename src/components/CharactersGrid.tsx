import React from "react";
import Character from "./Character";
import { useAppContext } from "../AppContext";
import { RMCharacter } from "../common/types";

const App = () => {
  const data = useAppContext();
  return (
    <div className="container">
      {data.status == "LOADED" ? (
        <div className="row">
          {data.value.characters.map((character: RMCharacter) => {
            return (
              <div key={character.id} className="col-md-4">
                <Character characterData={character} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h2>No characters: {data.status}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
