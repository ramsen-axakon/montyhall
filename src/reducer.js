import produce from "immer";
import * as constants from "./constants";
import { getRandomInt, getRandomBox } from "./utils/getRandomHelper";
import { initialBoxes, initialStatistics } from "./utils/initialHelper";

const initialState = {
  boxes: initialBoxes,
  currentBox: {},
  step: constants.PICK_FIRST_BOX,
  switchedBox: false,
  switchedStatistics: initialStatistics,
  keptStatistics: initialStatistics,
};

const reducer = produce((draft, action) => {
  const { step, type, pickedBox } = action;

  function setPercentage(win, count) {
    const gamesPlayed = count;
    const gamesWon = win * 100;
    return (gamesWon / gamesPlayed).toFixed(1);
  }

  // eslint-disable-next-line default-case
  switch (type) {
    case constants.SET_SWITCHED_STATISTICS:
      draft.switchedStatistics.count += 1;
      if (draft.currentBox.money) {
        draft.switchedStatistics.won += 1;
      }
      draft.switchedStatistics.percentage = setPercentage(
        draft.switchedStatistics.won,
        draft.switchedStatistics.count
      );

      return draft;

    case constants.SET_KEPT_STATISTICS:
      draft.keptStatistics.count += 1;
      if (draft.currentBox.money) {
        draft.keptStatistics.won += 1;
      }
      draft.keptStatistics.percentage = setPercentage(
        draft.keptStatistics.won,
        draft.keptStatistics.count
      );
      return draft;

    case constants.SET_STEP:
      draft.step = step;
      return draft;

    case constants.SET_PICKED_BOX:
      if (draft.step === constants.PICK_FIRST_BOX) {
        draft.boxes[pickedBox.id].pickedBox = true;
        draft.currentBox = draft.boxes[pickedBox.id];
      }

      if (draft.step === constants.KEEP_OR_SWITCH_BOX) {
        draft.boxes[draft.currentBox.id].pickedBox = false;
        draft.boxes[pickedBox.id].pickedBox = true;
        draft.currentBox = draft.boxes[pickedBox.id];
      }

      return draft;

    case constants.RESET_GAME:
      draft.boxes = initialBoxes;
      draft.step = constants.PICK_FIRST_BOX;
      return draft;

    case constants.REVELE_EMPTY_BOX:
      const boxesWithoutMoney = draft.boxes.filter((box) => !box.money);
      const reveleadNumber = getRandomBox(boxesWithoutMoney.length);

      let reveleadByHost = boxesWithoutMoney[reveleadNumber];
      if (reveleadByHost.pickedBox) {
        reveleadByHost = boxesWithoutMoney[+!reveleadNumber];
      }
      draft.boxes[reveleadByHost.id].isReveleadByHost = true;
      return draft;

    case constants.INIT_BOX_WITH_MONEY:
      draft.boxes[getRandomInt(0, 3)].money = true;
      return draft;
  }
}, initialState);

export default reducer;
