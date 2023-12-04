import React from "react";
import { Col, Row } from "react-bootstrap";
import { useGameContext } from "../../context/GameContext";
import GuessOptions from "./GuessOptions";
import CharacterPicture from "./CharacterPicture";
import Lose from "./Lose";
import Win from "./Win";
import LoadingOverlay from "react-loading-overlay-ts";
import { useAppContext } from "../../context/AppContext";
import { useActor } from "@xstate/react";

const GamePanel = () => {
  const data = useAppContext();
  const [state] = useActor(data.stateService)
  const character = state.context.randomCharacter

  return (
    <LoadingOverlay
      active={state.matches("Trivia started.Loading Random Character")}
      spinner
      text="Loading your content..."
    >
      <Row>
        {state.context.lifes > 0 ? (
          <Col xs={12}>
            {state.context.points === 100 ? (
              <Win />
            ) : (
              <div>
                <CharacterPicture character={character} characterLoaded={state.matches("Trivia started.Question")}/>
                <GuessOptions />
              </div>
            )}
          </Col>
        ) : (
          <Col xs={12}>
            <Lose />
          </Col>
        )}
      </Row>
    </LoadingOverlay>
  );
};

export default GamePanel;
