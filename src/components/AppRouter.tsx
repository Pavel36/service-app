import { Grid } from "@mui/material";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../router";
import Sidebar from "./Layout/Sidebar";

const AppRouter = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  return isAuth ? (
    <Grid container spacing={3}>
      <Grid item xs={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={11}>
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
          <Route path="*" element={<Navigate to={RouteNames.ALL_CLAIMS} />} />
        </Routes>
      </Grid>
    </Grid>
  ) : (
    <Grid xs={12}>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.component />}
            key={route.path}
          />
        ))}
        <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
      </Routes>
    </Grid>
  );
};

export default AppRouter;
