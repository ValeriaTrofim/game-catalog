import { Box, Grid } from "@mui/material";
import useScreenshots from "../hooks/useScreenshots";
import GameScreenshotsSkeleton from "./GameScreenshotsSkeleton";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isFetching, error } = useScreenshots(gameId);

  const skeletons = [...Array(6).keys()];

  if (error) throw error;
  return (
    <Box>
      <Grid container columnSpacing={1} rowSpacing={1}>
        {isFetching &&
          skeletons.map((skeleton) => (
            <GameScreenshotsSkeleton key={skeleton} />
          ))}
        {data?.results.map((file) => (
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            xs={12}
            sm={12}
            md={6}
            key={file.id}
          >
            <img src={file.image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GameScreenshots;
