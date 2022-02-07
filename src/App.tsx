import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./components/AppRouter";
import { checkToken } from "./services/checkToken";
import { setUserFromToken } from "./services/setUserFromToken";
import { AuthActionCreators } from "./store/reducers/auth/action-creators";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      checkToken(
        () => dispatch(AuthActionCreators.logout()),
        () => dispatch(AuthActionCreators.setIsAuth(true)),
        () => setUserFromToken(() => dispatch(AuthActionCreators.setUser))
      );
    }
  });

  return (
    <Grid container direction="row" className="App">
      <Grid xs={12}>
        <AppRouter />
      </Grid>
    </Grid>
  );
}

export default App;
