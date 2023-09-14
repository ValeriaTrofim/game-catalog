import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import logo from "../assets/logo.webp";
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
      <AppBar position="static">
        <IconButton
          color="inherit"
          aria-label="menu"
          sx={{ width: 60, height: 60 }}
        >
          <img src={logo} width={60} height={60} />
        </IconButton>
      </AppBar>
      {/* </ThemeProvider> */}
    </Stack>
  );
};

export default NavBar;
