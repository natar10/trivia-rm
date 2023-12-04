import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { useActor } from "@xstate/react";

export default function GeneralModal() {
  const data = useAppContext();
  const [state] = useActor(data.stateService);
  const { send } = data.stateService;
  console.log("THE STATE IN THE MODAL IS:///", state)
  return (
    <Modal
      show={state.matches("Instruction modal opened")}
      onHide={() => { send({ type: "Reject Instructions" }) }}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h2>Instructions</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>You will have to guess the identity of 10 characters.</li>
          <li>For each right character you get +10 points!</li>
          <li>You have 3 chances to be wrong or YOU LOSE!</li>
          <li>You can use the clues for every question</li>
        </ul>
        <h2 className="text-center font-weight-bold">
          SHOW ME WHAT YOU GOT!
        </h2>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => { send({ type: "Reject Instructions" }) }} variant="secondary">
          <h3>NOPE!</h3>
        </Button>
        <Button className="btn btn-primary" onClick={() => { console.log("START TRIVIA!!!") 
        send({ type: "Accept Instructions"})}}>
          <h3>LET'S DO IT</h3>
        </Button>
      </Modal.Footer>
    </Modal>

  );
}
