import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, CircularProgress, Typography } from "@mui/material";
import ExpandableText from "../components/ExpandableText";
import GameAtributes from "../components/GameAtributes";

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
      <Typography variant="h4">{game?.name}</Typography>
      <ExpandableText>{game?.description_raw || ""}</ExpandableText>
      <GameAtributes game={game} />
    </Box>
  );
};

export default GameDetailPage;
