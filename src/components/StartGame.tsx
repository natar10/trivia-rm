import React from "react";
import { Button } from "./styled/Button";
import { useAppContext } from "../AppContext";
import ImgsBack from "./ImgsBack";

const StartGame = () => {
  const data = useAppContext();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="trivia">TRIVIA</h1>
          {data.status == "LOADED" ? (
            <React.Fragment>
              <Button onClick={data.toogleOpen} primary>
                JUGAR
              </Button>
              <ImgsBack characters={data.value.characters} />
            </React.Fragment>
          ) : (
            <div>
              <h2>No characters: {data.status}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartGame;
