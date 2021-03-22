import React from "react";
import { Badge } from "react-bootstrap";

const LifesCounter = () => {
  return (
    <div className="text-right">
      <h1>
        Lifes <Badge variant="secondary">2/3</Badge>
      </h1>
    </div>
  );
};

export default LifesCounter;
