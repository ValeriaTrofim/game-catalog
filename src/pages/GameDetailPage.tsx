import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import ExpandableText from "../components/ExpandableText";
import GameAtributes from "../components/GameAtributes";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading)
    return (
      <Box p={20}>
        <CircularProgress />
      </Box>
    );
  if (error) throw error;
  if (!game) {
    return <Typography>Error: Game not found</Typography>;
  }

  return (
    <Box p={5}>
      <Grid container columnSpacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h4" pb={2}>
            {game?.name}
          </Typography>
          <ExpandableText>{game?.description_raw || ""}</ExpandableText>
          <GameAtributes game={game} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <GameScreenshots gameId={game.id} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameDetailPage;
