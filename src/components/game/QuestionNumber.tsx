import React from "react";
import { Badge, Spinner } from "react-bootstrap";
import { useGameContext } from "../../context/GameContext";
import Clue from "./Clue";
import { head } from "ramda";

const QuestionNumber = () => {
  const data = useGameContext();

  const question =
    data.status == "LOADED" ? (
      <span>{data.question}</span>
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
          Question # <Badge variant="secondary">{question}</Badge>
        </div>

        {data.status == "LOADED" && (
          <Clue episode={data.value.character!.episode[0]} />
        )}
      </h1>
    </div>
  );
};

export default QuestionNumber;
