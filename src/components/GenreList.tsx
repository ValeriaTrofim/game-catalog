import useGenres from "../hooks/useGenres";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ListItem
      component="div"
      sx={{ flexDirection: "column", alignItems: "flex-start" }}
    >
      {genres?.results.map((genre) => (
        <ListItemButton sx={{ width: "100%" }} key={genre.id}>
          <Avatar variant="rounded" src={genre.image_background}></Avatar>
          <ListItemText sx={{ paddingLeft: 1 }}> {genre.name}</ListItemText>
        </ListItemButton>
      ))}
    </ListItem>
  );
};

export default GenreList;
