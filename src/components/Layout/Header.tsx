import { Avatar, Grid, Input, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import LogOutIcon from "./icon-log-out.svg";
import AvatarIcon from "./Ivan.png";
import BellIcon from "./icon-bell.svg";
import SearchIcon from "./icon-search.svg";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MyInput from "../UI/MyInput";
import ClaimService from "../../api/ClaimService";

const Header = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  return (
    <Grid container direction="row">
      <MyInput
        placeholder="Search"
        style={{ width: "30%" }}
        onChange={setSearchString}
      />
      <button
        onClick={() => {
          const resp = ClaimService.searchClaim(searchString);
        }}
      >
        search
      </button>
      <img src={BellIcon} alt="" />
      <Avatar alt="Ivan Ivanov" src={AvatarIcon} />
      <button
        style={{ background: "transparent", border: 0, cursor: "pointer" }}
        onClick={() => dispatch(AuthActionCreators.logout())}
      >
        <img src={LogOutIcon} alt="" />
      </button>
    </Grid>
  );
};

export default Header;
