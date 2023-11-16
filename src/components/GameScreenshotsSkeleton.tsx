import { Grid, Skeleton } from "@mui/material";

const GameScreenshotsSkeleton = () => {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      xs={12}
      sm={12}
      md={6}
    >
      <Skeleton variant="rectangular" height={150} />
    </Grid>
  );
};

export default GameScreenshotsSkeleton;
