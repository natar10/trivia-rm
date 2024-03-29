import React, { useState } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { useGameContext } from "../../context/GameContext";
import { RMCharacter } from "../../common/types";
import { append, sortBy, prop } from "ramda";
import { Button } from "../styled/Button";
import { Option } from "../styled/Option";

const GuessOptions = () => {
  const data = useGameContext();

  const generateQuestions = (): RMCharacter[] => {
    if (data.status == "LOADED") {
      const randomOptions: RMCharacter[] = data
        .randomCharacters!.filter(
          (character: RMCharacter) => character.id !== data.value.character!.id
        )
        .map((character: RMCharacter) => {
          return character;
        });
      const sortById = sortBy(prop("id"));
      return sortById(append(data.value.character!, randomOptions));
    } else {
      return [];
    }
  };

  const loaders = [1, 2, 3, 4];

  const [revealAnswer, setRevealAnswer] = useState<boolean>(false);

  const itemVariant = (character: number) => {
    if (revealAnswer && data.status === "LOADED") {
      if (character === data.value.character!.id) {
        return "success";
      }
      return "danger";
    }
  };

  const checkAnswer = (answer: number) => {
    if (data.status === "LOADED") {
      if (answer === data.value.character!.id) {
        data.points < 100
          ? data.gameControl.updatePoints(data.points + 10)
          : data.points;
      } else {
        data.gameControl.updateLifes(data.lifes - 1);
      }
      data.gameControl.updateQuestion(data.question + 1);
    }
  };

  return (
    <div>
      <h2 className="text-center py-4">Who's this?</h2>
      {data.status == "LOADED" && (
        <div className="text-center">
          <fieldset disabled={revealAnswer}>
            {generateQuestions().map((character: RMCharacter) => {
              return (
                <Option
                  key={character.id}
                  variant={itemVariant(character.id)}
                  onClick={() => {
                    checkAnswer!(character.id);
                    setRevealAnswer(true);
                  }}
                >
                  {character.name}
                </Option>
              );
            })}
          </fieldset>
          <Button
            className="mt-3"
            onClick={() => {
              data.gameControl.nextCharacter!();
              setRevealAnswer(false);
            }}
            primary
          >
            NEXT
          </Button>
        </div>
      )}
    </div>
  );
};

export default GuessOptions;
