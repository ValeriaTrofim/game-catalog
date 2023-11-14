import { Grid, Typography } from "@mui/material";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameAtributes = ({ game }: Props) => {
  return (
    <Grid container>
      <Grid item xs={16} sm={6} md={4}>
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem term="Platforms">
          {game?.parent_platforms.map(({ platform }) => (
            <Typography key={platform.id}>{platform.name}</Typography>
          ))}
        </DefinitionItem>
      </Grid>
      <Grid item xs={16} sm={6} md={4}>
        <DefinitionItem term="Genres">
          {game.genres.map((genre) => (
            <Typography key={genre.id}>{genre.name}</Typography>
          ))}
        </DefinitionItem>

        <DefinitionItem term="Publishers">
          {game.publishers.map((publisher) => (
            <Typography key={publisher.id}>{publisher.name}</Typography>
          ))}
        </DefinitionItem>
      </Grid>
    </Grid>
  );
};

export default GameAtributes;
