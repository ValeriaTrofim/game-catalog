import { Game } from "../entities/Game";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Grid item xs={16} sm={6} md={4}>
      <Card
        sx={{
          ":hover": {
            transform: "scale(1.03)",
            transition: " transform .15s  ease-in",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component={"span"}
            sx={{
              height: 200,
              minWidth: 220,
              backgroundPosition: "top",
            }}
            image={game.background_image}
            title="game"
          />
          <CardContent>
            <Stack
              direction="row"
              alignContent="center"
              justifyContent="space-between"
            >
              <Typography
                component={"div"}
                variant="body2"
                color="text.secondary"
              >
                <PlatformIconList
                  platforms={game.parent_platforms?.map((p) => p.platform)}
                />
              </Typography>
              <CriticScore score={game.metacritic} />
            </Stack>

            <Link underline="none" color="inherit" href={"/games/" + game.slug}>
              <Typography variant="h5" fontWeight="bold" pt={1}>
                {game.name}
              </Typography>
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default GameCard;
