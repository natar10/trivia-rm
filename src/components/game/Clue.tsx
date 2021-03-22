import React, { useState, useEffect } from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { RickCharacters } from "../../services/RickApi";
import { useGameContext } from "../../context/GameContext";
import { RMEpisode, ClueProps } from "../../common/types";

const Clue = (props: ClueProps) => {
  const data = useGameContext();

  const [episode, setEpisode] = useState<RMEpisode | null>(null);

  useEffect(() => {
    if (props.episode) {
      RickCharacters.getClue(props.episode)
        .then((data: RMEpisode) => {
          setEpisode(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setEpisode(null);
    }
  }, [props.episode]);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Clue</Popover.Title>

      {data.status === "LOADED" && (
        <Popover.Content>
          {episode && (
            <span>
              <strong>This character apeared in:</strong> {episode.name}
              <br />
              <strong>Episode #</strong> {episode.episode}
              <br />
              <strong>Date #</strong> {episode.air_date}
            </span>
          )}
        </Popover.Content>
      )}
    </Popover>
  );

  return (
    <div className="text-center">
      {episode && (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Button variant="primary" size="lg">
            Need a clue?
          </Button>
        </OverlayTrigger>
      )}
    </div>
  );
};

export default Clue;
