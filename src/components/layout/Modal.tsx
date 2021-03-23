import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useAppContext } from "../../context/AppContext";
import { Link } from "@reach/router";

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
            <Button onClick={data.toogleOpen} variant="secondary">
              <h3>NOPE!</h3>
            </Button>
            <Link className="btn btn-primary" to="/trivia">
              <h3>LET'S DO IT</h3>
            </Link>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
