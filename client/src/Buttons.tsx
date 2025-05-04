import { PlayerChoiceProps } from "./types/PlayerChoiceProps";

const Buttons = ({ playerChoice, setPlayerChoice }: PlayerChoiceProps) => {
  const backgroundColor = (button: "rock" | "paper" | "scissors") => {
    return playerChoice === button ? "bg-red-400" : "bg-white";
  };
  const textColor = (button: "rock" | "paper" | "scissors") => {
    return playerChoice === button ? "text-white" : "text-black";
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        className={`rounded-full px-10 py-9 text-2xl shadow-lg transition-colors duration-300 ease-in-out hover:bg-red-400 hover:text-white ${backgroundColor("rock")} ${textColor("rock")}`}
        onClick={() => setPlayerChoice("rock")}
      >
        <i className="fa-solid fa-hand-fist"></i>
      </button>
      <button
        className={`rounded-full px-10 py-9 text-2xl shadow-lg transition-colors duration-300 ease-in-out hover:bg-red-400 hover:text-white ${backgroundColor("paper")} ${textColor("paper")}`}
        onClick={() => setPlayerChoice("paper")}
      >
        <i className="fa-solid fa-hand"></i>
      </button>
      <button
        className={`rounded-full px-10 py-9 text-2xl shadow-lg transition-colors duration-300 ease-in-out hover:bg-red-400 hover:text-white ${backgroundColor("scissors")} ${textColor("scissors")}`}
        onClick={() => setPlayerChoice("scissors")}
      >
        <i className="fa-solid fa-hand-peace"></i>
      </button>
    </div>
  );
};

export default Buttons;
