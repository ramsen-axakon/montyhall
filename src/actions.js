import {
  SET_PICKED_BOX,
  RESET_BOXES,
  SET_IS_REVELEAD_BY_HOST,
  SET_BOX_WITH_MONEY,
} from "./constants";

export function setPickedBox(data) {
  return {
    type: SET_PICKED_BOX,
    data,
  };
}

export function resetBoxes(boxes) {
  return {
    type: RESET_BOXES,
    boxes,
  };
}

export function setIsReveleadByHost(data) {
  return {
    type: SET_IS_REVELEAD_BY_HOST,
    data,
  };
}

export function setBoxWithMoney() {
  return {
    type: SET_BOX_WITH_MONEY,
  };
}

export function setStep(step, data) {
  return {
    type: step,
    data,
  };
}
