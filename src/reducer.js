import produce, { current } from "immer";
import * as constants from "./constants";
import { getRandomInt, getRandomBox } from "./utils/getRandomHelper";
import initialBoxes from "./utils/initialBoxes";

const initialState = {
  boxes: initialBoxes,
  step: constants.PICK_FIRST_BOX,
  score: {
    switched: {
      count: 0,
      percentage: 0,
      win: 0,
    },
    kept: {
      count: 0,
      percentage: 0,
      win: 0,
    },
  },
  switchedBox: false,
};

const reducer = produce((draft, action) => {
  const { type, boxes, data } = action;

  function setPercentage(win, count) {
    const gamesPlayed = count;
    const gamesWon = win * 100;
    return (gamesWon / gamesPlayed).toFixed(1);
  }
  // eslint-disable-next-line default-case
  switch (type) {
    case constants.SWITCH_BOX:
      draft.switchedBox = true;
      return draft;

    case constants.PICK_FIRST_BOX:
      draft.step = constants.PICK_THIRD_BOX;
      return draft;

    case constants.PICK_THIRD_BOX:
      draft.step = constants.DISPLAY_RESULT;
      return draft;

    case constants.DISPLAY_RESULT:
      draft.step = constants.DISPLAY_RESULT;
      draft.score.kept.count += 1;
      draft.score.kept.percentage = setPercentage(
        draft.score.kept.win,
        draft.score.kept.count
      );
      draft.score.kept.win += 1;

      return draft;

    case constants.SET_PICKED_BOX:
      if (draft.step === constants.PICK_FIRST_BOX) {
        draft.boxes[data.id].pickedBox = true;
        draft.step = constants.PICK_THIRD_BOX;
      } else if (draft.step === constants.PICK_THIRD_BOX) {
        draft.boxes[data.id].pickedBox = true;
        draft.step = constants.DISPLAY_RESULT;
        draft.switchedBox = true;
        draft.score.switched.count += 1;
        draft.score.switched.percentage = setPercentage(
          draft.score.switched.win,
          draft.score.switched.count
        );
        draft.score.switched.win += 1;
      }
      return draft;

    case constants.RESET_BOXES:
      draft.boxes = boxes;
      draft.step = constants.PICK_FIRST_BOX;
      return draft;

    case constants.SET_IS_REVELEAD_BY_HOST:
      const currentBoxes = current(draft.boxes);
      const losingBoxes = currentBoxes.filter((box) => box.money === false);
      const openNumber = getRandomBox(losingBoxes.length);

      let openBox = losingBoxes[openNumber];
      if (openBox.pickedBox === true) {
        openBox = losingBoxes[+!openNumber];
      }
      draft.boxes[openBox.id].isReveleadByHost = true;
      return draft;

    case constants.SET_BOX_WITH_MONEY:
      draft.boxes[getRandomInt(0, 3)].money = true;
      return draft;
  }
}, initialState);

export default reducer;
