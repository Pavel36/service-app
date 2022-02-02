import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import UserService, { userRoles } from "../../api/UserService";
import MyButton from "../../components/UI/MyButton";
import { useNavigate } from "react-router";
import { AdminRouteNames, UserRouteNames } from "../../router";
import Header, { HeaderSearchType } from "../../components/Layout/Header";
import UserList from "../../components/UserList";
import MyLoader from "../../components/UI/MyLoader";

const UsersPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);
  const [usersLoading, setUsersLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setUsersLoading(true);
    UserService.getAll()
      .then((resp) => {
        const users = resp.data.users;
        setUsers(users);
        setUsersLoading(false);
      })
      .catch((e) => {
        setError("Users were not loaded");
        setUsersLoading(false);
      });
  }, []);

  return (
    <Grid container direction="column">
      <Header
        setLoading={setUsersLoading}
        setFilterdItems={setUsers}
        type={HeaderSearchType.user}
      />
      <Grid
        container
        direction="row"
        marginTop={6}
        justifyContent="space-between"
      >
        <Grid item style={{ fontSize: 36, fontWeight: 700 }}>
          Users
        </Grid>
        <Grid item>
          <MyButton
            onClick={() => navigate(AdminRouteNames.ADD_USER)}
            value="+ Create user"
          />
        </Grid>
      </Grid>
      <Grid marginTop="20px">
        {usersLoading ? (
         <MyLoader/>
        ) : error ? (
          <Grid style={{ marginTop: 30 }} color="#7db59a">
            {error}
          </Grid>
        ) : (
          <UserList data={users} />
        )}
      </Grid>
    </Grid>
  );
};

export default UsersPage;
