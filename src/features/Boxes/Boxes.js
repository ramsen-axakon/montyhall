import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPickedBox,
  resetGame,
  reveleEmptyBox,
  initBoxWithMoney,
  setStep,
  setSwitchedStatistics,
  setKeptStatistics,
} from "../../actions";
import { getBoxes, getStep } from "../../selectors";
import {
  PICK_FIRST_BOX,
  KEEP_OR_SWITCH_BOX,
  DISPLAY_RESULT,
} from "../../constants";
import { getRandomInt } from "../../utils/getRandomHelper";
import Box from "./Box";
import Button from "../../components/Button/Button";

import "./Boxes.css";

export default function Boxes() {
  const allBoxes = useSelector(({ app }) => getBoxes(app));
  const currentStep = useSelector(({ app }) => getStep(app));

  const [displaySimulationDone, setDisplaySimulationDone] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatchResetGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatchResetGame = () => {
    dispatch(resetGame());
    dispatch(initBoxWithMoney());
  };

  const dispatchKeepBox = () => {
    dispatch(setKeptStatistics());
    dispatch(setStep(DISPLAY_RESULT));
  };

  const dispatchPickFirstBox = (pickedBox) => {
    dispatch(setPickedBox(pickedBox));
    dispatch(reveleEmptyBox());
    dispatch(setStep(KEEP_OR_SWITCH_BOX));
  };

  const dispatchSwitchBox = (pickedBox) => {
    dispatch(setPickedBox(pickedBox));
    dispatch(setSwitchedStatistics());
    dispatch(setStep(DISPLAY_RESULT));
  };

  function pickBox(descision, times) {
    for (let index = 0; index < times; index++) {
      const randomBox = allBoxes[getRandomInt(0, 3)];

      dispatchPickFirstBox(randomBox);
      descision(randomBox);
      dispatchResetGame();
    }
  }

  const simulateGame = (times) => {
    setDisplaySimulationDone(true);
    pickBox(dispatchSwitchBox, times);
    pickBox(dispatchKeepBox, times);
    setTimeout(() => {
      setDisplaySimulationDone(false);
    }, 3000);
  };

  function nextStepHandler(pickedBox, currentStep) {
    switch (currentStep) {
      case PICK_FIRST_BOX:
        return dispatchPickFirstBox(pickedBox);

      case KEEP_OR_SWITCH_BOX:
        return dispatchSwitchBox(pickedBox);

      case DISPLAY_RESULT:
        return dispatchResetGame();

      default:
        return;
    }
  }
  return (
    <>
      <div className="boxes">
        {allBoxes.map((box) => {
          return (
            <Box
              key={box.id}
              callBack={nextStepHandler}
              data={box}
              step={currentStep}
            />
          );
        })}
      </div>
      <Button
        className="button button-green"
        onClick={dispatchKeepBox}
        text="Click here to keep box!"
        disabled={currentStep !== KEEP_OR_SWITCH_BOX}
      />

      <Button
        className={"button"}
        onClick={dispatchResetGame}
        text={"Restart game"}
        disabled={currentStep !== DISPLAY_RESULT}
      />

      <Button
        className={"button"}
        onClick={() => simulateGame(100)}
        text={displaySimulationDone ? "Done!" : "Simulate"}
        disabled={displaySimulationDone}
      />
    </>
  );
}
