import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, CircularProgress, Typography } from "@mui/material";
import ExpandableText from "../components/ExpandableText";
import GameAtributes from "../components/GameAtributes";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <CircularProgress />;
  if (error) throw error;
  if (!game) {
    return <Typography>Error: Game not found</Typography>;
  }

  return (
    <Box p={5}>
      <Typography variant="h4" pb={2}>
        {game?.name}
      </Typography>
      <ExpandableText>{game?.description_raw || ""}</ExpandableText>
      <GameAtributes game={game} />
      <GameScreenshots gameId={game.id} />
    </Box>
  );
};

export default GameDetailPage;
