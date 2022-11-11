import logo from "./logo.svg";
import "./App.css";
import Final from "./Page/GridFour";
import Menu from "./Components/Menu";
import Third from "./Components/Third";
import { Grid, Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box fullWidth sx={{ mr: 1, ml: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Box sx={{ p: 3, m: 3 }}>
              <Menu />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Final />
          </Grid>
          <Grid item xs={3}>
            <Third />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
