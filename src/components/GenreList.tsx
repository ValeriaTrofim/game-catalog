import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import GenreListSkeleton from "./GenreListSkeleton";
import { List } from "@mui/material";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, isFetching, error } = useGenres();
  const skeletons = [...Array(19).keys()];

  if (error) return null;
  return (
    <List>
      <ListItem
        component="div"
        sx={{ flexDirection: "column", alignItems: "flex-start" }}
      >
        <ListItemText
          primary="Genre"
          primaryTypographyProps={{
            fontSize: 20,
            fontWeight: "bold",
            paddingLeft: 2,
          }}
        />
        {isFetching &&
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
    </List>
  );
};

export default GenreList;
