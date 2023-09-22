import React from "react";
import { Button } from "../styled/Button";
import { useAppContext } from "../../context/AppContext";
import ImgsBack from "../layout/ImgsBack";
import LoadingOverlay from "react-loading-overlay-ts";
import { Link } from "react-router-dom";
import { useActor } from "@xstate/react";


const StartGame = () => {
  const data = useAppContext();
  const [state] = useActor(data.stateService);
  const { send } = data.stateService;
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="trivia">Who is who?</h1>
          <LoadingOverlay
            active={state.matches("Loading Trivia Characters")}
            spinner
            text="Loading your content..."
          >
            {state.matches("Starting Trivia") && (
              <>
                <Button onClick={() => {
                  send({
                    type: "Start"
                  })
                }} primary>
                  PLAY
                </Button>
                <Link to="/subscribe">
                  <Button className="ml-4" secondary>
                    SUBSCRIBE
                  </Button>
                </Link>
                <ImgsBack characters={state.context.characters} />
              </>
            )}
          </LoadingOverlay>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
