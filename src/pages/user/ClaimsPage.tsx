import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import ClaimService from "../../api/ClaimService";
import ClaimList from "../../components/ClaimList";
import MyButton from "../../components/UI/MyButton/MyButton";
import { useNavigate } from "react-router";
import { UserRouteNames } from "../../router";
import Header, { HeaderSearchType } from "../../components/Layout/Header";
import MyLoader from "../../components/UI/MyLoader/MyLoader";

const ClaimsPage = () => {
  const navigate = useNavigate();
  const [claims, setClaims] = useState([]);
  const [claimsLoading, setClaimsLoading] = useState(false);
  const [error, setError] = useState("");

  function descendingComparator(a: any, b: any, orderBy: any) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order: any, orderBy: any) {
    return order === 'desc'
      ? (a: any, b: any) => descendingComparator(a, b, orderBy)
      : (a: any, b: any) => -descendingComparator(a, b, orderBy);
  }
  
  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array: any, comparator: any) {
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el: any) => el[0]);
  }

  useEffect(() => {
    setClaimsLoading(true);
    ClaimService.getAll()
      .then((resp) => {
        const claims = resp.data.claims;
        setClaims(claims);
        setClaimsLoading(false);
      })
      .catch((e) => {
        setError("Claims were not loaded");
        setClaimsLoading(false);
      });
  }, []);

  return (
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
          <MyLoader />
        ) : error ? (
          <Grid style={{ marginTop: 30 }} color="#7db59a">
            {error}
          </Grid>
        ) : (
          <ClaimList data={claims} />
        )}
      </Grid>
    </Grid>
  );
};

export default ClaimsPage;
