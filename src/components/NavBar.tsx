import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/logo.webp";
import Typography from "@mui/material/Typography";

// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#1976d2',
//     },
//   },
// });

const NavBar = () => {
  return (
    <Stack>
      {/* <ThemeProvider theme={darkTheme}> */}
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
          NavBar
        </Typography>
      </AppBar>
      {/* </ThemeProvider> */}
    </Stack>
  );
};

export default NavBar;
