import React from "react";
import { Col, Row } from "react-bootstrap";
import { useGameContext } from "../../context/GameContext";
import GuessOptions from "./GuessOptions";
import CharacterPicture from "./CharacterPicture";
import Lose from "./Lose";
import Win from "./Win";

const GamePanel = () => {
  const data = useGameContext();
  return (
    <Row>
      <>
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
      </>
    </Row>
  );
};

export default GamePanel;
