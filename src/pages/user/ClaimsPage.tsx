import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import ClaimService from "../../api/ClaimService";
import ClaimList from "../../components/ClaimList";
import MyButton from "../../components/UI/MyButton";
import { useNavigate } from "react-router";
import { UserRouteNames } from "../../router";
import Header, { HeaderSearchType } from "../../components/Layout/Header";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { PuffLoader } from "react-spinners";
import Sidebar from "../../components/Layout/Sidebar";

const ClaimsPage = () => {
  const navigate = useNavigate();
  const [claims, setClaims] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);
  const [claimsLoading, setClaimsLoading] = useState(false);

  useEffect(() => {
    setClaimsLoading(true);
    ClaimService.getAll().then((resp) => {
      const claims = resp.data.claims;
      setClaims(claims);
    });
    setClaimsLoading(false);
  }, []);

  return claimsLoading ? (
    <PuffLoader />
  ) : (
    <Grid container direction="column">
      <Header
        setLoading={setClaimsLoading}
        setFilterdItems={setClaims}
        type={HeaderSearchType.claim}
      />
      <Grid
        container
        direction="row"
        marginTop={6}
        justifyContent="space-between"
      >
        <Grid item style={{ fontSize: 36, fontWeight: 700 }}>
          Your Claims
        </Grid>
        <Grid item>
          <MyButton
            onClick={() => navigate(UserRouteNames.ADD_CLAIM)}
            value="+ Create claim"
          />
        </Grid>
      </Grid>

      <Grid marginTop="20px">
        {claimsLoading ? (
          <Grid>
            <PuffLoader />
          </Grid>
        ) : (
          <ClaimList data={claims} />
        )}
      </Grid>
    </Grid>
  );
};

export default ClaimsPage;
