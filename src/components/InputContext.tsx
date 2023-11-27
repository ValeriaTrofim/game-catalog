import React from "react";
import { GameQuery } from "../entities/GameQuery";

interface InputProps {
  gameQuery: GameQuery;
  setGameQuery: React.Dispatch<React.SetStateAction<GameQuery>>;
}

const InputContext = React.createContext<InputProps>({} as InputProps);

export default InputContext;
