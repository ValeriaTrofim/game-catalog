import { Typography } from "@mui/material";
import { GameQuery } from "../pages/HomePage";

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
