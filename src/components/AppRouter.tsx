import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../router";

const AppRouter = () => {
  const isAuth = useTypedSelector(state => state.auth.isAuth)
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
      <Route path='*' element={<Navigate to={RouteNames.ALL_CLAIMS}/>}/>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
      <Route path='*' element={<Navigate to={RouteNames.LOGIN}/>}/>
    </Routes>
  );
};

export default AppRouter;
