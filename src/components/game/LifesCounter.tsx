import React from "react";
import { Badge, Spinner } from "react-bootstrap";
import { useGameContext } from "../../context/GameContext";

const LifesCounter = () => {
  const data = useGameContext();

  const lifes =
    data.status == "LOADED" ? (
      <span>{data.lifes}</span>
    ) : (
      <Spinner
        className="small-spinner"
        animation="border"
        size="sm"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  return (
    <div className="text-right">
      <h1>
        <div className="text-center">
          Lifes{" "}
          <Badge variant="secondary" role="lifes-counter">
            {lifes}/3
          </Badge>
        </div>
      </h1>
    </div>
  );
};

export default LifesCounter;
