import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useGameContext } from "../../context/GameContext";
import { RMCharacter } from "../../common/types";

type CharacterPictureProps = {
  character: RMCharacter
  characterLoaded: boolean
}

const CharacterPicture = (props: CharacterPictureProps) => {
  const { character, characterLoaded} = props
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} className="text-center">
          {characterLoaded && (
            <Image
              className="img-character"
              src={character!.image}
              roundedCircle
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterPicture;
