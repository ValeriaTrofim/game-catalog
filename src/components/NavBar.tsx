import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/logo.webp";
import SwitchMUI from "./SwitchMUI";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import SearchInput from "./SearchInput";

export interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Stack>
      <AppBar
        position="static"
        sx={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Link href={"/"}>
          <IconButton
            color="inherit"
            aria-label="menu"
            sx={{ width: 60, height: 60 }}
          >
            <img src={logo} width={60} height={60} />
          </IconButton>
        </Link>
        <SearchInput onSearch={onSearch} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>

        <SwitchMUI />
      </AppBar>
    </Stack>
  );
};

export default NavBar;
