import useGenres from "../hooks/useGenres";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;
  return (
    <ListItem
      component="div"
      sx={{ flexDirection: "column", alignItems: "flex-start" }}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
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
