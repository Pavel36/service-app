import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ClaimService from "./api/ClaimService";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import AddClaimPage from "./pages/AddClaimPage";
import ClaimsPage from "./pages/ClaimsPage";
import EditClaimPage from "./pages/EditClaimPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [loading, setLoading] = useState(false);
  const [editedClaim, setEditedClaim] = useState();

  useEffect(() => {
    setLoading(true);
    ClaimService.getClaim("618cdef960a2a69429ffa76c").then((resp) => {
      const claim = resp.data;
      
      setEditedClaim(claim);
    });
    setLoading(false);
  }, [editedClaim]);

  return (
    <Grid container direction="row" className="App">
      <Grid>
        <Sidebar />
      </Grid>
      <Grid xs={11}>
        <Header />
        <ClaimsPage />
        <AddClaimPage />
      </Grid>
    </Grid>
  );
}

export default App;
