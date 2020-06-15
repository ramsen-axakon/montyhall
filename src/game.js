const Game = {
  new: () => {
    const boxes = [
      { id: 0, isRevealed: false, hasMoney: false, isPicked: false },
      { id: 1, isRevealed: false, hasMoney: false, isPicked: false },
      { id: 2, isRevealed: false, hasMoney: false, isPicked: false },
    ];
    const moneyIndex = randomIndex(boxes);
    return {
      boxes: boxes.map((box, index) => {
        return index === moneyIndex ? { ...box, hasMoney: true } : box;
      }),
      state: "FIRST_PICK",
    };
  },
  pickBox: (game, boxId) => {
    let boxes = game.boxes;
    boxes = boxes.map((box) =>
      box.id === boxId ? { ...box, isPicked: true } : box
    );
    const revealedBox = boxes.find((box) => !box.isPicked && !box.hasMoney);
    if (game.state === "FIRST_PICK") {
      return {
        ...game,
        state: "SECOND_PICK",
        boxes: boxes.map((box) => {
          return revealedBox.id === box.id ? { ...box, isRevealed: true } : box;
        }),
      };
    }
    return {
      ...game,
      state: "FINISHED",
      hasWon: game.boxes[boxId].hasMoney,
      boxes: boxes.map((box) => ({ ...box, isRevealed: true })),
    };
  },
};

const randomIndex = () => Math.floor(Math.random() * 3);

export default Game;
