import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import ClaimService from "../api/ClaimService";
import ClaimList from "../components/ClaimList";
import MyButton, { ButtonVariant } from "../components/UI/MyButton";
import { useNavigate } from "react-router";
import { RouteNames } from "../router";
import Header from "../components/Layout/Header";
import { useTypedSelector } from "../hooks/useTypedSelector";

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
  },[]);

  return claimsLoading ? (
    <div>loading</div>
  ) : (
    <Grid container direction="column">
      <Header />
      <Grid marginTop="20px" style={{ justifyContent: "end" }}>
        <MyButton
          variant={ButtonVariant.submit}
          onClick={() => navigate(RouteNames.ADD_CLAIM)}
        >
          + Create claim
        </MyButton>
      </Grid>
      <Grid marginTop="20px">
        <ClaimList data={claims} />
      </Grid>
    </Grid>
  );
};

export default ClaimsPage;
