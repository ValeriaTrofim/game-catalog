import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";

const GameCardSkeleton = () => {
  return (
    <Card sx={{ minWidth: 220, mb: 3 }}>
      <CardMedia>
        <Skeleton variant="rectangular" height={200} />
      </CardMedia>
      <CardContent>
        <Skeleton />
        <Skeleton sx={{ padding: 1 }} />
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
