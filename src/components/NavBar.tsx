import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/logo.webp";
import SwitchMUI from "./SwitchMUI";
import Typography from "@mui/material/Typography";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <Stack>
      <AppBar
        position="static"
        sx={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="menu"
          sx={{ width: 60, height: 60 }}
        >
          <img src={logo} width={60} height={60} />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          <SearchInput />
        </Typography>

        <SwitchMUI />
      </AppBar>
    </Stack>
  );
};

export default NavBar;
