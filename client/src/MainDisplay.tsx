import { useEffect, useState } from "react";
import { PlayerChoiceProps } from "./types/PlayerChoiceProps";
import { PlayerHasChosenProps } from "./types/PlayerHasChosenProps";

type MainDisplayProps = PlayerChoiceProps & PlayerHasChosenProps;

const MainDisplay = ({
  playerChoice,
  setPlayerHasChosen,
}: MainDisplayProps) => {
  const [computerChoice, setComputerChoice] = useState<
    undefined | "rock" | "paper" | "scissors"
  >();
  const [number, setNumber] = useState<number>(0);
  const [wins, setWins] = useState<number>(0);
  const [losses, setLosses] = useState<number>(0);
  const [hasUpdatedResult, setHasUpdatedResult] = useState<boolean>(false);

  useEffect(() => {
    if (playerChoice === undefined) return;

    setComputerChoice(undefined);
    setNumber(0);
    setHasUpdatedResult(false);

    const interval = setInterval(() => {
      setNumber((prevNumber) => {
        if (prevNumber >= 9) {
          clearInterval(interval);
          const choices = ["rock", "paper", "scissors"] as const;
          const randomIndex = Math.floor(Math.random() * 3);
          setComputerChoice(choices[randomIndex]);
          return 10;
        }
        return prevNumber + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [playerChoice]);

  const ComputerChoiceDisplay = () => {
    if (playerChoice === undefined) return "";

    if (number === 10 && computerChoice) {
      return `${playerChoice[0].toUpperCase() + playerChoice.slice(1)} VS. ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`;
    }

    const cycle = [
      `${playerChoice[0].toUpperCase() + playerChoice.slice(1)} VS. Rock`,
      `${playerChoice[0].toUpperCase() + playerChoice.slice(1)} VS. Paper`,
      `${playerChoice[0].toUpperCase() + playerChoice.slice(1)} VS. Scissors`,
    ];
    return cycle[number % 3];
  };

  useEffect(() => {
    if (number === 10 && playerChoice && computerChoice && !hasUpdatedResult) {
      if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        setWins((prev) => prev + 1);
        setHasUpdatedResult(true);
        setPlayerHasChosen(false);
      } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
      ) {
        setLosses((prev) => prev + 1);
        setHasUpdatedResult(true);
        setPlayerHasChosen(false);
      } else {
        setHasUpdatedResult(true);
        setPlayerHasChosen(false);
      }
    }
  }, [number, playerChoice, computerChoice, hasUpdatedResult]);

  const result = () => {
    if (playerChoice && computerChoice) {
      if (playerChoice === "rock" && computerChoice === "paper") {
        return "Computer won!";
      } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "Computer won!";
      } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "Computer won!";
      } else if (computerChoice === "rock" && playerChoice === "paper") {
        return "Player won!";
      } else if (computerChoice === "paper" && playerChoice === "scissors") {
        return "Player won!";
      } else if (computerChoice === "scissors" && playerChoice === "rock") {
        return "Player won!";
      } else {
        return "Draw!";
      }
    }
  };

  return (
    <>
      <h2>{`Wins: ${wins}, Losses: ${losses}`}</h2>
      <h1 className="mb-2 text-3xl font-semibold text-black">
        Rock Paper Scissors
      </h1>
      <h2 className="h-8">{result()}</h2>
      <h2 className="h-8 font-medium text-black">{ComputerChoiceDisplay()}</h2>
    </>
  );
};

export default MainDisplay;
