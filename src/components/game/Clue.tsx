import React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

const Clue = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Clue</Popover.Title>
      <Popover.Content>
        This Character apeared in the chapter #230 where Rick and Morty traveled
        to space.
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="text-center">
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button className="my-4" variant="primary" size="lg">
          Need a clue?
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default Clue;
