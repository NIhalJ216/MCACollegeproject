import "./App.css";
import { Grid } from "@mui/material";
import Drawer from "./Components/Drawer";
import Login from "./Pages/LoginPage/Login";

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Drawer />
      </Grid>
    </Grid>
  );
}

export default App;
