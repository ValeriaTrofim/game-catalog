import { Game } from "../hooks/useGame";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ maxWidth: 345, mb: 3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={game.background_image}
        title="game"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </Typography>
        <Typography variant="h5" component="div">
          {game.name}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default GameCard;
