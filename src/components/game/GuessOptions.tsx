import React from "react";
import { ListGroup } from "react-bootstrap";

const GuessOptions = () => {
  function alertClicked() {
    alert("You clicked the third ListGroupItem");
  }

  return (
    <div>
      <h2 className="text-center py-4">Who is this?</h2>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action onClick={alertClicked}>
          Rick Sanchez
        </ListGroup.Item>
        <ListGroup.Item action onClick={alertClicked}>
          Pickle Rick
        </ListGroup.Item>
        <ListGroup.Item action onClick={alertClicked}>
          Alien Rick
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default GuessOptions;
