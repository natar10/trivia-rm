import React, { useState } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { useGameContext } from "../../context/GameContext";
import { RMCharacter } from "../../common/types";
import { append, sortBy, prop } from "ramda";
import { Button } from "../styled/Button";
import { Option } from "../styled/Option";
import { useAppContext } from "../../context/AppContext";
import { useActor } from "@xstate/react";
import { assign } from "xstate";

const GuessOptions = () => {
  const data = useAppContext();
  const [state] = useActor(data.stateService)

  const generateQuestions = (): RMCharacter[] => {
    if (state.matches("Trivia started.Question")) {
      const randomOptions: RMCharacter[] = state.context
        .randomCharacters!.filter(
          (character: RMCharacter) => character.id !== state.context.randomCharacter!.id
        )
        .map((character: RMCharacter) => {
          return character;
        });
      const sortById = sortBy(prop("id"));
      return sortById(append(state.context.randomCharacter!, randomOptions));
    } else {
      return [];
    }
  };

  const loaders = [1, 2, 3, 4];

  const [revealAnswer, setRevealAnswer] = useState<boolean>(false);

  const itemVariant = (character: number) => {
    if (revealAnswer && state.matches("Trivia started.Question")) {
      if (character === state.context.randomCharacter.id) {
        return "success";
      }
      return "danger";
    }
  };

  const checkAnswer = (answer: number) => {
    if (state.matches("Trivia started.Question")) {
      if (answer === state.context.randomCharacter.id) {
        state.context.points < 100
          ? assign(() => { return { points: state.context.points + 10 } })
          : state.context.points;
      } else {
        assign(() => { return { lifes: state.context.lifes -1  } })
      }
      assign(() => { return { question: state.context.question + 1 } })
    }
  };

  return (
    <div>
      <h2 className="text-center py-4">Who's this?</h2>
      {state.matches("Trivia started.Question") && (
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
              //data.gameControl.nextCharacter!();
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
