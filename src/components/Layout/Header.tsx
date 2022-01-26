import { Avatar, Grid, Input, InputAdornment } from "@mui/material";
import React, { FC, useState } from "react";
import LogOutIcon from "../../assets/icon-log-out.svg";
import AvatarIcon from "../../assets/Ivan.png";
import BellIcon from "../../assets/icon-bell.svg";
import SearchIcon from "../../assets/icon-search.svg";
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
    <Grid container xs={12} borderBottom="2px solid #f0f0f0" paddingBottom="10px" paddingTop="10px" justifyContent="flex-end">
      <Grid item xs={3}>
        <MyInput
          placeholder="Search"
          style={{ width: "80%" }}
          onChange={setSearchString}
        />
        <button
          style={{ background: "transparent", border: 0, cursor: "pointer", position: "absolute", left:'68%' }}
          onClick={() => {
            handleSearchClick();
          }}
        >
          <img src={SearchIcon} alt="" />
        </button>
      </Grid>

      <Grid xs={1}>
        <button
          style={{ background: "transparent", border: 0, cursor: "pointer" }}
          onClick={() => {}}
        >
          <img src={BellIcon} alt="" />
        </button>
      </Grid>

      <Grid xs={1}>
        <button
          style={{ background: "transparent", border: 0, cursor: "pointer" }}
          onClick={() => {}}
        >
          <Avatar alt="Ivan Ivanov" src={AvatarIcon} />
        </button>
      </Grid>
      
      <Grid xs={1}>
        <button
          style={{ background: "transparent", border: 0, cursor: "pointer" }}
          onClick={() => handleLogOutClick()}
        >
          <img src={LogOutIcon} alt="" />
        </button>
      </Grid>
    </Grid>
  );
};

export default Header;
