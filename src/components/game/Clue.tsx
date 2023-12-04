import React, { useState, useEffect } from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { RickCharacters } from "../../services/RickApi";
import { RMEpisode, ClueProps } from "../../common/types";
import { useAppContext } from "../../context/AppContext";
import { useActor } from "@xstate/react";

const Clue = (props: ClueProps) => {
  const data = useAppContext();
  const [state] = useActor(data.stateService);
  const { send } = data.stateService;

  const [episode, setEpisode] = useState<RMEpisode | null>(null);

  useEffect(() => {
    let isMounted = true;
    console.log("the state is:///" , state)
    if (props.episode) {
      RickCharacters.getClue(props.episode)
        .then((data: RMEpisode) => {
          if (isMounted) setEpisode(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setEpisode(null);
    }
    return () => {
      isMounted = false;
    };
  }, [props.episode]);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Clue</Popover.Title>
        <Popover.Content>
          {episode && (
            <span>
              <strong>This character apeared in:</strong>{" "}
              {episode.name.toUpperCase()}
              <br />
              <strong>Episode #</strong> {episode.episode}
              <br />
              <strong>Date #</strong> {episode.air_date}
            </span>
          )}
        </Popover.Content>
    </Popover>
  );

  return (
    <div className="text-center">
      {episode && (
        <OverlayTrigger  placement="bottom" overlay={popover} show={state.matches("Trivia started.Question.Clue.Clue Tooltip Opened")}>
          <Button variant="primary" size="lg" onClick={() => { console.log(state) 
          send("Toggle Clue")}}>
            Need a clue?
          </Button>
        </OverlayTrigger>
      )}
    </div>
  );
};

export default Clue;
