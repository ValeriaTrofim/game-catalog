import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { CircularProgress, Typography } from "@mui/material";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <CircularProgress />;
  if (error) throw error;
  return (
    <>
      <Typography variant="h4">{game?.name}</Typography>
      <ExpandableText>{game?.description_raw || ""}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
