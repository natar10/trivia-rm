import React from "react";
import { Col, Row } from "react-bootstrap";
import { useGameContext } from "../../context/GameContext";
import GuessOptions from "./GuessOptions";
import CharacterPicture from "./CharacterPicture";
import Lose from "./Lose";
import Win from "./Win";
import LoadingOverlay from "react-loading-overlay-ts";

const GamePanel = () => {
  const data = useGameContext();
  return (
    <LoadingOverlay
      active={data.status === "LOADED" ? false : true}
      spinner
      text="Loading your content..."
    >
      <Row>
        {data.lifes > 0 ? (
          <Col xs={12}>
            {data.points === 100 ? (
              <Win />
            ) : (
              <div>
                <CharacterPicture />
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
