import { PlayerChoiceProps } from "./types/PlayerChoiceProps";
import { PlayerHasChosenProps } from "./types/PlayerHasChosenProps";

type ButtonsProps = PlayerChoiceProps & PlayerHasChosenProps;

const Buttons = ({
  playerChoice,
  setPlayerChoice,
  playerHasChosen,
  setPlayerHasChosen,
}: ButtonsProps) => {
  const backgroundColor = (button: "rock" | "paper" | "scissors") => {
    return playerChoice === button ? "bg-red-400" : "bg-white";
  };

  const textColor = (button: "rock" | "paper" | "scissors") => {
    return playerChoice === button ? "text-white" : "text-black";
  };

  const buttonFunc = (button: "rock" | "paper" | "scissors") => {
    setPlayerChoice(button);
    setPlayerHasChosen(true);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        className={`rounded-full px-10 py-9 text-2xl shadow-lg transition-colors duration-300 ease-in-out ${backgroundColor("rock")} ${playerHasChosen ? "" : "hover:bg-red-400"} ${textColor("rock")} ${playerHasChosen ? "" : "hover:text-white"}`}
        onClick={() => buttonFunc("rock")}
        disabled={playerHasChosen ? true : false}
      >
        <i className="fa-solid fa-hand-fist"></i>
      </button>
      <button
        className={`rounded-full px-10 py-9 text-2xl shadow-lg transition-colors duration-300 ease-in-out ${backgroundColor("paper")} ${playerHasChosen ? "" : "hover:bg-red-400"} ${textColor("paper")} ${playerHasChosen ? "" : "hover:text-white"}`}
        onClick={() => buttonFunc("paper")}
        disabled={playerHasChosen ? true : false}
      >
        <i className="fa-solid fa-hand"></i>
      </button>
      <button
        className={`rounded-full px-10 py-9 text-2xl shadow-lg transition-colors duration-300 ease-in-out ${backgroundColor("scissors")} ${playerHasChosen ? "" : "hover:bg-red-400"} ${textColor("scissors")} ${playerHasChosen ? "" : "hover:text-white"}`}
        onClick={() => buttonFunc("scissors")}
        disabled={playerHasChosen ? true : false}
      >
        <i className="fa-solid fa-hand-peace"></i>
      </button>
    </div>
  );
};

export default Buttons;
