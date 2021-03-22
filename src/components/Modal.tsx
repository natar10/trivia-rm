import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useAppContext } from "../AppContext";

export default function GeneralModal() {
  const data = useAppContext();
  return (
    <>
      {data.status === "LOADED" && (
        <Modal
          show={data.modalStatus}
          onHide={data.toogleOpen}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Instructions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>You will have to guess the identity of 10 characters.</li>
              <li>For each right character you get +10 points!</li>
              <li>You have 3 chances to be wrong or YOU LOSE!</li>
              <li>
                You can use the clues for every question and comodins for 2
                questions
              </li>
            </ul>
            <h3>SHOW ME WHAT YOU GOT!</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={data.toogleOpen} variant="secondary">
              NOPE!
            </Button>
            <Button variant="primary">LET'S DO IT</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
