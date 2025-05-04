import { Dispatch, SetStateAction } from "react";

export type PlayerChoiceProps = {
  playerChoice: "rock" | "paper" | "scissors" | undefined;
  setPlayerChoice: Dispatch<
    SetStateAction<"rock" | "paper" | "scissors" | undefined>
  >;
};
