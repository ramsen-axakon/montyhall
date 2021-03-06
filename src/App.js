import React, { useState } from "react";
import Game from "./game";
import Message from "./components/Message";
import Button from "./components/Button";
import Box from "./components/Box";
import Statistics from "./components/Statistics";

function App() {
  const [game, setGame] = useState(Game.new());
  const [isSimulating, setIsSimulating] = useState(false);
  const [statistics, setStatistics] = useState({
    switchedWins: 0,
    keptWins: 0,
    playedRounds: 0,
  });

  const pickBox = (id) => setGame(Game.pickBox(game, id));

  const resetGame = () => {
    setStatistics({ ...statistics, playedRounds: 0 });
    setGame(Game.new());
  };

  const runSimulation = () => {
    setIsSimulating(true);
    const iterations = 1000;
    const kept = simulateRounds(true, iterations);
    const switched = simulateRounds(false, iterations);

    const keptResult = kept.reduce((acc, run) => {
      if (run.hasWon) return acc + 1;
      return acc;
    }, 0);

    const switchedResult = switched.reduce((acc, run) => {
      if (run.hasWon) return acc + 1;
      return acc;
    }, 0);

    setStatistics({
      switchedWins: switchedResult,
      keptWins: keptResult,
      playedRounds: iterations,
    });
    setTimeout(() => {
      setIsSimulating(false);
    }, 1000);
  };

  const simulateRounds = (shouldKeep, iterations) => {
    let result = [];
    for (let index = 0; index < iterations; index++) {
      let game = Game.new();
      const firstPickId = Math.floor(Math.random() * 3);

      game = Game.pickBox(game, firstPickId);
      if (shouldKeep) {
        game = Game.pickBox(game, firstPickId);
      } else {
        game = Game.pickBox(
          game,
          game.boxes.find((box) => !box.isSelected && !box.isRevealed).id
        );
      }

      setTimeout(() => {
        setGame((_prev) => {
          return game;
        });
      }, 100);

      result.push({ hasWon: game.hasWon, switched: !shouldKeep });
    }

    return result;
  };

  const instructionMessage = () => {
    switch (game.state) {
      case "FIRST_PICK":
        return "Welcome contender! Please, pick a box!";

      case "SECOND_PICK":
        return "Switch or keep your box!";

      case "FINISHED":
        if (game.hasWon) {
          return "You won the money!";
        } else {
          return "Too bad, you did not win the money, try again!";
        }
      default:
        return;
    }
  };

  return (
    <div className="app">
      <div className="container ">
        <Message
          text={
            isSimulating
              ? "Running simulation, please wait!"
              : instructionMessage()
          }
        />

        <div className="boxes">
          {game.boxes.map((box) => (
            <Box
              key={box.id}
              disabled={box.isRevealed || game.state === "FINISHED"}
              isRevealed={box.isRevealed}
              hasMoney={box.hasMoney}
              isPicked={box.isPicked}
              onClick={() => pickBox(box.id)}
            >
              {box.id + 1}
            </Box>
          ))}
        </div>

        <Button onClick={resetGame} disabled={game.state === "FIRST_PICK"}>
          Reset
        </Button>

        <Button
          type="secondary"
          isLoading={isSimulating}
          onClick={runSimulation}
        >
          Run simulation
        </Button>

        <Statistics data={statistics} isLoading={isSimulating} />
      </div>
    </div>
  );
}

export default App;
