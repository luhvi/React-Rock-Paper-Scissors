import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Buttons from "./Buttons";
import MainDisplay from "./MainDisplay";
import { useState } from "react";

function App() {
  const [playerChoice, setPlayerChoice] = useState<
    undefined | "rock" | "paper" | "scissors"
  >();

  return (
    <>
      <MainDisplay
        playerChoice={playerChoice}
        setPlayerChoice={setPlayerChoice}
      />
      <Buttons playerChoice={playerChoice} setPlayerChoice={setPlayerChoice} />
    </>
  );
}

export default App;
