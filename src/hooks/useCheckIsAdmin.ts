import { UserRouteNames, PublicRouteNames } from "./../router/index";
import { userRoles } from "./../api/UserService";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import UserService from "../api/UserService";

const useCheckIsAdmin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    const curToken = localStorage.getItem("token");
    let jwt = require("jsonwebtoken");
    let decodedToken = jwt.decode(curToken);
    UserService.getUser(decodedToken.id).then((resp) => {
      setLoading(false);
      localStorage.setItem("role", resp.data.role.slug);
      if (resp.data.role.slug) {
        if (resp.data.role.slug === userRoles.worker) {
          navigate(UserRouteNames.ALL_CLAIMS);
        }
      } else {
        navigate(PublicRouteNames.LOGIN);
      }
    });
  }, []);
  return {
    loading,
  };
};

export default useCheckIsAdmin;
