import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Buttons from "./Buttons";
import MainDisplay from "./MainDisplay";
import { useState } from "react";

function App() {
  const [playerChoice, setPlayerChoice] = useState<
    undefined | "rock" | "paper" | "scissors"
  >();
  const [playerHasChosen, setPlayerHasChosen] = useState<boolean>(false);

  return (
    <>
      <MainDisplay
        playerChoice={playerChoice}
        setPlayerChoice={setPlayerChoice}
        playerHasChosen={playerHasChosen}
        setPlayerHasChosen={setPlayerHasChosen}
      />
      <Buttons
        playerChoice={playerChoice}
        setPlayerChoice={setPlayerChoice}
        playerHasChosen={playerHasChosen}
        setPlayerHasChosen={setPlayerHasChosen}
      />
    </>
  );
}

export default App;
