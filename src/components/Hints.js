import React from "react";
import { hints } from "../challanges/hints";

const Hints = () => {
  return (
    <div>
      <h3>Refactoring Hints</h3>
      <ul>
        {hints.map((hint, index) => (
          <li key={index}>{hint}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hints;