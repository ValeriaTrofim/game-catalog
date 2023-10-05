import useGenres, { Genre } from "../hooks/useGenres";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, isLoading, error } = useGenres();
  const skeletons = [...Array(19).keys()];

  if (error) return null;
  return (
    <ListItem
      component="div"
      sx={{ flexDirection: "column", alignItems: "flex-start" }}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      {genres?.results.map((genre) => (
        <ListItemButton
          selected={genre.id === selectedGenre?.id}
          onClick={() => onSelectGenre(genre)}
          sx={{ width: "100%" }}
          key={genre.id}
        >
          <Avatar variant="rounded" src={genre.image_background}></Avatar>
          <ListItemText sx={{ paddingLeft: 1 }}>{genre.name}</ListItemText>
        </ListItemButton>
      ))}
    </ListItem>
  );
};

export default GenreList;
