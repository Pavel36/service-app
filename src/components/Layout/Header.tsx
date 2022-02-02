import { Avatar, Grid } from "@mui/material";
import React, { FC, useState } from "react";
import LogOutIcon from "../../assets/icon-log-out.svg";
import AvatarIcon from "../../assets/Ivan.png";
import BellIcon from "../../assets/icon-bell.svg";
import SearchIcon from "../../assets/icon-search.svg";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import MyInput from "../UI/MyInput";
import ClaimService from "../../api/ClaimService";
import UserService from "../../api/UserService";

export enum HeaderSearchType {
  claim,
  user,
}

interface IHeaderProps {
  setLoading?: (loading: boolean) => void;
  setFilterdItems?: (claims: any) => void;
  type?: HeaderSearchType;
  showSearchString?: boolean;
}

const Header: FC<IHeaderProps> = ({
  setLoading,
  setFilterdItems,
  type,
  showSearchString = true,
}) => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");

  const handleSearchClick = () => {
    if (showSearchString && setLoading && setFilterdItems) {
      switch (type) {
        case HeaderSearchType.claim:
          setLoading(true);
          ClaimService.searchClaim(searchString).then((resp) => {
            setFilterdItems(resp.data.claims);
            setLoading(false);
          });
          break;
        case HeaderSearchType.user:
          setLoading(true);
          UserService.searchUser(searchString).then((resp) => {
            setFilterdItems(resp.data.users);
            setLoading(false);
          });
          break;
      }
    }
  };

  const handleLogOutClick = () => {
    dispatch(AuthActionCreators.logout());
  };

  return (
    <Grid
      container
      xs={12}
      borderBottom="2px solid #f0f0f0"
      paddingBottom="10px"
      paddingTop="10px"
      justifyContent="flex-end"
    >
      {showSearchString ? (
        <Grid item xs={3}>
          <button
            style={{
              background: "transparent",
              border: 0,
              cursor: "pointer",
              position: "absolute",
              zIndex: 10,
              right: '29%'
            }}
            onClick={() => {
              handleSearchClick();
            }}
          >
            <img src={SearchIcon} alt="" />
          </button>
          <MyInput
            placeholder="Search"
            style={{ width: "80%", position: 'relative' }}
            onChange={setSearchString}
          />
        </Grid>
      ) : (
        <Grid item xs={3}></Grid>
      )}

      <Grid xs={1} style={{textAlign:'end' }}>
        <button
          style={{ background: "transparent", border: 0, cursor: "pointer" }}
          onClick={() => {}}
        >
          <img src={BellIcon} alt="" />
        </button>
      </Grid>

      <Grid xs={1} style={{textAlign:'center' }}>
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
