import React from "react";
import { Badge, Spinner } from "react-bootstrap";
import { useGameContext } from "../../context/GameContext";
import Clue from "./Clue";
import { head } from "ramda";
import { useAppContext } from "../../context/AppContext";

const QuestionNumber = () => {
  const data = useAppContext();

  const question =
    true ? (
      <span>{1}</span>
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
          Question #{" "}
          <Badge role="question-counter" variant="secondary">
            {question}
          </Badge>
        </div>

        {true && (
          <Clue episode={null} />
        )}
      </h1>
    </div>
  );
};

export default QuestionNumber;
