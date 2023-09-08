import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={16}>
          <Item>nav</Item>
        </Grid>
        <Grid item xs={6} sx={{ display: { xs: "none", sm: "block" } }}>
          <Item>Aside</Item>
        </Grid>
        <Grid item xs={16} sm={6} md={6}>
          <Item>main</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
