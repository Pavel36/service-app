import { Grid } from '@mui/material';
import React from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import AddClaim from './pages/AddClaim';
import ClaimsPage from './pages/ClaimsPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
      <Grid container direction='row' className="App">
        <Grid>
          <Sidebar/>
        </Grid>
        <Grid xs={11}>
          <Header/>
          <AddClaim/>
        </Grid>
      </Grid>
  );
}

export default App;
