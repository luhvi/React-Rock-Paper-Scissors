import { Dispatch, SetStateAction } from "react";

export type PlayerHasChosenProps = {
  playerHasChosen: boolean;
  setPlayerHasChosen: Dispatch<SetStateAction<boolean>>;
};
