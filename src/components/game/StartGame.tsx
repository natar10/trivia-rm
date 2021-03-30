import React from "react";
import { Button } from "../styled/Button";
import { useAppContext } from "../../context/AppContext";
import ImgsBack from "../layout/ImgsBack";
import LoadingOverlay from "react-loading-overlay-ts";

const StartGame = () => {
  const data = useAppContext();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="trivia">Who is who?</h1>
          <LoadingOverlay
            active={data.status === "LOADED" ? false : true}
            spinner
            text="Loading your content..."
          >
            {data.status === "LOADED" && (
              <React.Fragment>
                <Button onClick={data.toogleOpen} primary>
                  PLAY
                </Button>
                <ImgsBack characters={data.value.characters} />
              </React.Fragment>
            )}
          </LoadingOverlay>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
