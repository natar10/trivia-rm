import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const CharacterPicture = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} className="text-center">
          <Image
            src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
            roundedCircle
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterPicture;
