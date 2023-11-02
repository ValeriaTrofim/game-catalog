import { Card, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";

const GameCardSkeleton = () => {
  return (
    <Grid item xs={16} sm={6} md={4}>
      <Card>
        <CardMedia>
          <Skeleton variant="rectangular" height={200} />
        </CardMedia>
        <CardContent>
          <Skeleton />
          <Skeleton sx={{ padding: 1 }} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GameCardSkeleton;
