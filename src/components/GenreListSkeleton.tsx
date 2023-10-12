import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import { List, ListItemButton } from "@mui/material";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem
        component="div"
        disablePadding
        sx={{ alignItems: "flex-start" }}
      >
        <ListItemButton sx={{ width: "100%", pt: 0, pb: 0 }}>
          <Avatar variant="rounded">
            <Skeleton
              animation="wave"
              variant="rounded"
              width={40}
              height={40}
            />
          </Avatar>
          <ListItemText sx={{ pl: 1 }}>
            <Skeleton width={50} />
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
