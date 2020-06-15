import Game from "./game";

test("it creates a new empty round with 3 boxes", () => {
  const game = Game.new();
  expect(game.boxes.length).toBe(3);
});

test("it hides money in one box", () => {
  const game = Game.new();
  const boxesWithMoney = game.boxes.filter((box) => box.hasMoney);
  expect(boxesWithMoney.length).toBe(1);
});
