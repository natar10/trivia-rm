import React from "react";
import { Badge, Spinner } from "react-bootstrap";
import { useGameContext } from "../../context/GameContext";

const PointCounter = () => {
  const data = useGameContext();

  const points =
    data.status == "LOADED" ? (
      <span>{data.points}</span>
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
          Points{" "}
          <Badge className="points" variant="secondary">
            {points}
          </Badge>
        </div>
      </h1>
    </div>
  );
};

export default PointCounter;
