import { Grid } from "@mui/material";
import AppRouter from "./components/AppRouter";
import Sidebar from "./components/Layout/Sidebar";

function App() {
  return (
    <Grid container direction="row" className="App">
      <Grid>
        <Sidebar />
      </Grid>
      <Grid xs={11}>
        <AppRouter/>
      </Grid>
    </Grid>
  );
}

export default App;
