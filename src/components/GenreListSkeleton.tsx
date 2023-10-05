import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import { ListItemButton } from "@mui/material";

const GenreListSkeleton = () => {
  return (
    <ListItem component="div" disablePadding sx={{ alignItems: "flex-start" }}>
      <ListItemButton sx={{ width: "100%" }}>
        <Avatar variant="rounded">
          <Skeleton animation="wave" variant="rounded" width={40} height={40} />
        </Avatar>
        <ListItemText sx={{ paddingLeft: 1 }}>
          <Skeleton width="30%" />
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default GenreListSkeleton;
