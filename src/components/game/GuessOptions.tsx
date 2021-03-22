import React, { useState } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { useGameContext } from "../../context/GameContext";
import { RMCharacter } from "../../common/types";
import { append, sortBy, prop } from "ramda";
import { Button } from "../styled/Button";
import { Option } from "../styled/Option";

const GuessOptions = () => {
  function alertClicked() {
    alert("You clicked the third ListGroupItem");
  }

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

  return (
    <div>
      <h2 className="text-center py-4">Who's this?</h2>
      {data.status == "LOADED" ? (
        <div className="text-center">
          <fieldset disabled={revealAnswer}>
            {generateQuestions().map((character: RMCharacter) => {
              return (
                <Option
                  key={character.id}
                  variant={itemVariant(character.id)}
                  onClick={() => {
                    data.checkAnswer!(character.id);
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
              data.nextCharacter!();
              setRevealAnswer(false);
            }}
            primary
          >
            NEXT
          </Button>
        </div>
      ) : (
        <div className="text-center">
          <ListGroup defaultActiveKey="#link1">
            {loaders.map((load: number) => {
              return (
                <ListGroup.Item key={load}>
                  <Spinner animation="border" size="sm" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      )}
    </div>
  );
};

export default GuessOptions;
