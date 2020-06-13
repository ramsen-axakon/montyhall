import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPickedBox,
  resetBoxes,
  setIsReveleadByHost,
  setBoxWithMoney,
  setStep,
} from "./actions";
import initialBoxes from "./utils/initialBoxes";
import { getBoxes, getStep } from "./selectors";
import { PICK_THIRD_BOX, DISPLAY_RESULT } from "./constants";

import Box from "./Box";
import Button from "./Button";

import "./Boxes.css";

export default function Boxes() {
  const allBoxes = useSelector(({ app }) => getBoxes(app));
  const currentStep = useSelector(({ app }) => getStep(app));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatchResetBoxes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatchKeepBox = () => dispatch(setStep(DISPLAY_RESULT));

  const dispatchPickedBox = (data, step) => {
    dispatch(setPickedBox(data));
    dispatch(setIsReveleadByHost(data));
    dispatch(setStep(step, data));
  };

  const dispatchResetBoxes = () => {
    dispatch(resetBoxes(initialBoxes));
    dispatch(setBoxWithMoney());
  };

  return (
    <>
      <div className="boxes">
        {allBoxes.map((box) => {
          return (
            <Box
              key={box.id}
              callBack={dispatchPickedBox}
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
        disabled={currentStep !== PICK_THIRD_BOX}
      />

      <Button
        className={"button"}
        onClick={dispatchResetBoxes}
        text={"Restart game"}
        disabled={currentStep !== DISPLAY_RESULT}
      />
    </>
  );
}
