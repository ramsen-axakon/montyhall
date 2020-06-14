import {
  SET_PICKED_BOX,
  RESET_GAME,
  REVEAL_EMPTY_BOX,
  INIT_BOX_WITH_MONEY,
  SET_STEP,
  SET_SWITCHED_STATISTICS,
  SET_KEPT_STATISTICS,
} from "./constants";

export function setPickedBox(pickedBox) {
  return {
    type: SET_PICKED_BOX,
    pickedBox,
  };
}

export function resetGame() {
  return {
    type: RESET_GAME,
  };
}

export function revealEmptyBox() {
  return {
    type: REVEAL_EMPTY_BOX,
  };
}

export function initBoxWithMoney() {
  return {
    type: INIT_BOX_WITH_MONEY,
  };
}

export function setStep(step) {
  return {
    type: SET_STEP,
    step,
  };
}

export function setSwitchedStatistics() {
  return {
    type: SET_SWITCHED_STATISTICS,
  };
}

export function setKeptStatistics() {
  return {
    type: SET_KEPT_STATISTICS,
  };
}
