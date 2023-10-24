import { Typography } from "@mui/material";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} 
  ${gameQuery.genre?.name || ""} Games`;

  return (
    <Typography variant="h2" component="div" sx={{ pb: 3 }}>
      {heading}
    </Typography>
  );
};

export default GameHeading;
