import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useGameContext } from "../../context/GameContext";
import { Button } from "../styled/Button";

const DisplayError = () => {
  const data = useGameContext();
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} className="text-center">
          <Image
            className="img-character"
            src="https://rickandmortyapi.com/api/character/avatar/225.jpeg"
            roundedCircle
          />
          <h2 className="trivia">Sorry there was an error!</h2>
          {data.status === "LOADED" && (
            <Button onClick={data.gameControl.reset} primary>
              PLAY AGAIN
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayError;
