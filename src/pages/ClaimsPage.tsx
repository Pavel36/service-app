import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import ClaimService from "../api/ClaimService";
import ClaimList from "../components/ClaimList";
import axios from "axios";
import MyButton, { ButtonVariant } from "../components/UI/MyButton";
import { currToken } from "../token";
import { useNavigate } from "react-router";
import { RouteNames } from "../router";
import Header from "../components/Layout/Header";

const mockClaims = [
  {
    title: "Figma smart web system for to build",
    created: "12/04/2021",
    type: "Hardware",
    status: "DECLINED",
  },
  {
    title: "Figma smart web system for to build",
    created: "12/04/2021",
    type: "Software",
    status: "NEW",
  },
  {
    title: "Figma smart web system for to build",
    created: "12/04/2021",
    type: "Troubleshooting",
    status: "IN PROGRESS",
  },
  {
    title: "Figma smart web system for to build",
    created: "12/04/2021",
    type: "Networking",
    status: "DONE",
  },
];

const ClaimsPage = () => {
  const navigate = useNavigate();
  const [claims, setClaims] = useState([]);
  const [claimsLoading, setClaimsLoading] = useState(false);

  useEffect(() => {
    setClaimsLoading(true);
    ClaimService.getAll().then((resp) => {
      const claims = resp.data.claims;
      setClaims(claims);
    });
    setClaimsLoading(false);
  }, [setClaims]);

  return (
    <Grid container direction="column">
      <Header/>
      <Grid marginTop="20px" style={{ justifyContent: "end" }}>
        <MyButton variant={ButtonVariant.submit} onClick={()=>navigate(RouteNames.ADD_CLAIM)}>
          + Create claim
        </MyButton>
      </Grid>
      <Grid marginTop="20px">
        {claimsLoading ? <div>loading</div> : <ClaimList data={claims} />}
      </Grid>
    </Grid>
  );
};

export default ClaimsPage;
