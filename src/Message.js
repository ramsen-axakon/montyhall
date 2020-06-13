import React from "react";
import { useSelector } from "react-redux";
import { getStep, getBoxes } from "./selectors";
import { PICK_FIRST_BOX, PICK_THIRD_BOX, DISPLAY_RESULT } from "./constants";

import "./Message.css";

export default function Boxes() {
  const currentStep = useSelector(({ app }) => getStep(app));
  const allBoxes = useSelector(({ app }) => getBoxes(app));

  const pickedBoxWithMoney = allBoxes.filter(
    (box) => box.money === true && box.pickedBox === true
  );

  function createMessage() {
    switch (currentStep) {
      case PICK_FIRST_BOX:
        return "Welcome contender! Please, pick a box!";

      case PICK_THIRD_BOX:
        return "Let's make a deal! Click on the numberd box to switch or the button to keep your box!";
      case DISPLAY_RESULT:
        if (pickedBoxWithMoney.length) {
          return "You won the money!";
        } else {
          return "Sorry, you did not win the money! Try again!";
        }
      default:
        return;
    }
  }
  return (
    <div className="message">
      {createMessage()}
      <span className="message-bubble"></span>
    </div>
  );
}
