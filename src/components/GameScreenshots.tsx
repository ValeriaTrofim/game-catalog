import { Box, Grid } from "@mui/material";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isFetching, error } = useScreenshots(gameId);

  if (isFetching) return null;
  if (error) throw error;
  return (
    <Box>
      <Grid container>
        {data?.results.map((file) => (
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            xs={12}
            sm={6}
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
