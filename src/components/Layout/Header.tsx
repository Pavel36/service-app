import { Avatar, Grid, Input, InputAdornment } from "@mui/material";
import React, { FC, useState } from "react";
import LogOutIcon from "./icon-log-out.svg";
import AvatarIcon from "./Ivan.png";
import BellIcon from "./icon-bell.svg";
import SearchIcon from "./icon-search.svg";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MyInput from "../UI/MyInput";
import ClaimService from "../../api/ClaimService";

interface IHeaderProps {
  setLoading: (loading: boolean) => void;
  setFilterdClaims: (claims: any) => void;
}

const Header: FC<IHeaderProps> = ({ setLoading, setFilterdClaims }) => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");

  const handleSearchClick = () => {
    setLoading(true);
    ClaimService.searchClaim(searchString).then((resp) => {
      setFilterdClaims(resp.data.claims);
      setLoading(false);
    });
  };

  const handleLogOutClick = () => {
    dispatch(AuthActionCreators.logout());
  };

  return (
    <Grid container sx={{ width: "100%", border: '1px solid' }} direction="row">
      <MyInput
        placeholder="Search"
        style={{ width: "30%" }}
        onChange={setSearchString}
      />
      <button
        style={{ background: "transparent", border: 0, cursor: "pointer" }}
        onClick={() => {
          handleSearchClick();
        }}
      >
        <img src={SearchIcon} alt="" />
      </button>
      <button
        style={{ background: "transparent", border: 0, cursor: "pointer" }}
        onClick={() => {}}
      >
        <img src={BellIcon} alt="" />
      </button>
      <button
        style={{ background: "transparent", border: 0, cursor: "pointer" }}
        onClick={() => {}}
      >
        <Avatar alt="Ivan Ivanov" src={AvatarIcon} />
      </button>
      <button
        style={{ background: "transparent", border: 0, cursor: "pointer" }}
        onClick={() => handleLogOutClick()}
      >
        <img src={LogOutIcon} alt="" />
      </button>
    </Grid>
  );
};

export default Header;
