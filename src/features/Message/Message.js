import React from "react";
import { useSelector } from "react-redux";
import { getStep, getBoxes } from "../../selectors";
import {
  PICK_FIRST_BOX,
  KEEP_OR_SWITCH_BOX,
  DISPLAY_RESULT,
} from "../../constants";

import "./Message.css";

export default function Boxes() {
  const currentStep = useSelector(({ app }) => getStep(app));
  const allBoxes = useSelector(({ app }) => getBoxes(app));

  const pickedBoxWithMoney = allBoxes.filter(
    (box) => box.money && box.pickedBox
  );

  function createMessage() {
    switch (currentStep) {
      case PICK_FIRST_BOX:
        return "Welcome contender! Please, pick a box!";

      case KEEP_OR_SWITCH_BOX:
        return "Click on the numbered box to switch or the button to keep your box!";

      case DISPLAY_RESULT:
        if (pickedBoxWithMoney.length) {
          return "You won the money!";
        } else {
          return "Too bad, you did not win the money, try again!";
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
