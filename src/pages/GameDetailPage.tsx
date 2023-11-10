import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { CircularProgress, Typography } from "@mui/material";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <CircularProgress />;
  if (error) throw error;
  return (
    <>
      <Typography variant="h4">{game?.name}</Typography>
      <Typography variant="subtitle1">{game?.description_raw}</Typography>
    </>
  );
};

export default GameDetailPage;
