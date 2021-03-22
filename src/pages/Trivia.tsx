import React from "react";
import { AppContextProvider } from "../context/AppContext";
import { Props } from "../common/types";
import { Col, Container, Row } from "react-bootstrap";
import QuestionNumber from "../components/game/QuestionNumber";
import LifesCounter from "../components/game/LifesCounter";
import CharacterPicture from "../components/game/CharacterPicture";
import GuessOptions from "../components/game/GuessOptions";
import Clue from "../components/game/Clue";
import GameTitle from "../components/layout/GameTitle";

const Trivia: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <AppContextProvider>
        <GameTitle />
        <Container>
          <Row>
            <Col xs={6} md={6}>
              <QuestionNumber />
            </Col>
            <Col xs={6} md={6}>
              <LifesCounter />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <CharacterPicture />
              <GuessOptions />
              <Clue />
            </Col>
          </Row>
        </Container>
      </AppContextProvider>
    </React.Fragment>
  );
};

export default Trivia;
