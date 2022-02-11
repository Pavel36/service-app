import { Grid } from "@mui/material";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { userRoles } from "../api/UserService";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  userRoutes,
  publicRoutes,
  PublicRouteNames,
  UserRouteNames,
  adminRoutes,
  AdminRouteNames,
} from "../router";
import Sidebar from "./Layout/Sidebar";

const AppRouter = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const isAdmin = localStorage.getItem("role") === userRoles.administrator;
  return isAuth ? (
    isAdmin ? (
      <Grid container>
        <Grid item xs={1}>
          <Sidebar />
        </Grid>
        <Grid item xs={11} sx={{ paddingRight: 8 }}>
          <Routes>
            {adminRoutes.map((route) => (
              <Route
                path={route.path}
                element={<route.component />}
                key={route.path}
              />
            ))}
            <Route
              path="*"
              element={<Navigate to={AdminRouteNames.ALL_USERS} />}
            />
          </Routes>
        </Grid>
      </Grid>
    ) : (
      <Grid container>
        <Grid item xs={1}>
          <Sidebar />
        </Grid>
        <Grid item xs={11} sx={{ paddingRight: 8 }}>
          <Routes>
            {userRoutes.map((route) => (
              <Route
                path={route.path}
                element={<route.component />}
                key={route.path}
              />
            ))}
            <Route
              path="*"
              element={<Navigate to={UserRouteNames.ALL_CLAIMS} />}
            />
          </Routes>
        </Grid>
      </Grid>
    )
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
        <Route path="*" element={<Navigate to={PublicRouteNames.LOGIN} />} />
      </Routes>
    </Grid>
  );
};

export default AppRouter;
