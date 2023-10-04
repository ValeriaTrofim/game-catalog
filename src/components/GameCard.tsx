import { Game } from "../hooks/useGame";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ maxWidth: 345, mb: 3 }}>
      <CardMedia
        component={"span"}
        sx={{ height: 140 }}
        image={game.background_image}
        title="game"
      />
      <CardContent>
        <Stack
          direction="row"
          alignContent="center"
          justifyContent="space-between"
        >
          <Typography variant="body2" color="text.secondary">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </Typography>
          <CriticScore score={game.metacritic} />
        </Stack>
        <Typography variant="h5" component="div" paddingTop={1}>
          {game.name}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default GameCard;