import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./components/AppRouter";
import Sidebar from "./components/Layout/Sidebar";
import { checkToken } from "./services/checkToken";
import { AuthActionCreators } from "./store/reducers/auth/action-creators";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      checkToken(
        () => dispatch(AuthActionCreators.logout()),
        () => dispatch(AuthActionCreators.setIsAuth(true))
      );
    }
  });

  return (
    <Grid container direction="row" style={{width:'100vw'}} className="App">
      <Grid xs={11}>
        <AppRouter />
      </Grid>
    </Grid>
  );
}

export default App;
