import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import UserService, { userRoles } from "../../api/UserService";
import ClaimList from "../../components/ClaimList";
import MyButton from "../../components/UI/MyButton";
import { useNavigate } from "react-router";
import { AdminRouteNames, UserRouteNames } from "../../router";
import Header from "../../components/Layout/Header";
import { PuffLoader } from "react-spinners";

const ClaimsPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);
  const [usersLoading, setUsersLoading] = useState(false);

  useEffect(() => {
    setUsersLoading(true);
    UserService.getAll().then((resp) => {
      const users = resp.data.users;
      setUsers(users);
    });
    setUsersLoading(false);
  }, []);

  return pageLoading ? (
    <PuffLoader />
  ) : (
    <Grid container direction="column">
      <Header setLoading={setUsersLoading} setFilterdClaims={setUsers} />
      <Grid marginTop="20px" style={{ justifyContent: "end" }}>
        <MyButton
          onClick={() => navigate(AdminRouteNames.ADD_USER)}
          value="+ Create claim"
        />
      </Grid>
      <Grid marginTop="20px">
        {usersLoading ? (
          <Grid>
            <PuffLoader />
          </Grid>
        ) : (
            //TODO Change ClaimList component
          <ClaimList data={users} />
        )}
      </Grid>
    </Grid>
  );
};

export default ClaimsPage;
