import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useGameContext } from "../../context/GameContext";

const CharacterPicture = () => {
  const data = useGameContext();
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} className="text-center">
          {data.status == "LOADED" && (
            <Image
              className="img-character"
              src={data.value.character!.image}
              roundedCircle
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterPicture;
