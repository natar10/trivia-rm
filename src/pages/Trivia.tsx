import React from "react";
import { GameContextProvider } from "../context/GameContext";
import { Props } from "../common/types";
import { Col, Container, Row } from "react-bootstrap";
import QuestionNumber from "../components/game/QuestionNumber";
import LifesCounter from "../components/game/LifesCounter";
import GameTitle from "../components/layout/GameTitle";
import PointCounter from "../components/game/PointCounter";
import GamePanel from "../components/game/GamePanel";

const Trivia: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <GameContextProvider>
        <GameTitle />
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <QuestionNumber />
            </Col>
            <Col xs={12} md={6}>
              <PointCounter />
              <LifesCounter />
            </Col>
          </Row>
          <GamePanel />
        </Container>
      </GameContextProvider>
    </React.Fragment>
  );
};

export default Trivia;
