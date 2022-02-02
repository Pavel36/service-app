import { Grid } from "@mui/material";
import React from "react";
import HomeIcon from "../../assets/icon-home.svg";
import GlobeIcon from "../../assets/icon-globe.svg";
import ArchiveIcon from "../../assets/icon-archive.svg";
import PieIcon from "../../assets/icon-pie-chart.svg";
import DollarIcon from "../../assets/icon-dollar-sign.svg";
import DatabaseIcon from "../../assets/icon-database.svg";
import ArrowIcon from "../../assets/icon-navigation.svg";
import Logo from "../../assets/Group5.svg";
import { useNavigate } from "react-router";
import { UserRouteNames } from "../../router";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Grid
      textAlign="center"
      paddingX="10px"
      container
      direction="column"
      sx={{
        background: "linear-gradient(180deg, #D5EEE2 0%, #7DB59A 43.23%)",
        height: "100vh",
        width: "6vw",
        minWidth: "80px",
      }}
    >
      <Grid paddingTop="2vh" sx={{ cursor: "pointer" }}>
        <button
          style={{ background: "transparent", border: 0, cursor: "pointer" }}
          onClick={() => navigate(UserRouteNames.ALL_CLAIMS)}
        >
          <img src={Logo} alt="" />
        </button>
      </Grid>
      <Grid paddingTop="4vh" sx={{ cursor: "pointer" }}>
        <img src={HomeIcon} alt="" />
      </Grid>
      <Grid paddingTop="4vh" sx={{ cursor: "pointer" }}>
        <img src={GlobeIcon} alt="" />
      </Grid>
      <Grid paddingTop="4vh" sx={{ cursor: "pointer" }}>
        <img src={ArchiveIcon} alt="" />
      </Grid>
      <Grid paddingTop="4vh" sx={{ cursor: "pointer" }}>
        <img src={PieIcon} alt="" />
      </Grid>
      <Grid paddingTop="4vh" sx={{ cursor: "pointer" }}>
        <img src={DollarIcon} alt="" />
      </Grid>
      <Grid paddingTop="4vh" sx={{ cursor: "pointer" }}>
        <img src={DatabaseIcon} alt="" />
      </Grid>
      <Grid paddingTop="4vh" sx={{ cursor: "pointer" }}>
        <img src={ArrowIcon} alt="" />
      </Grid>
    </Grid>
  );
};

export default Sidebar;
