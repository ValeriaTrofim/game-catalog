import "./App.css";
import Grid from "@mui/material/Grid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid container>
      <Grid item xs={16}>
        <NavBar />
      </Grid>
      <Grid item xs={6} sx={{ display: { xs: "none", sm: "block" } }}>
        Aside
      </Grid>
      <Grid item xs={16} sm={6} md={6}>
        Main
      </Grid>
    </Grid>
  );
}

export default App;
