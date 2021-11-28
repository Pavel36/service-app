import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ClaimService from '../api/ClaimService'
import ClaimList from '../components/ClaimList'
import axios from 'axios'
import MyButton from '../components/UI/MyButton'
import { currToken } from '../token'

const ClaimsPage = () => {
    const [claims,setClaims] = useState([])
    const [claimsLoading, setClaimsLoading] =useState(false)

    useEffect(() => {
      setClaimsLoading(true)
      ClaimService.getAll().then((resp) => {
        const claims = resp.data.claims;
        setClaims(claims);
    });
      setClaimsLoading(false)
    }, [setClaims])

    console.log(claims);
    
    
    return (
      <Grid container direction='column'>
        <Grid marginTop='20px' style={{justifyContent:'end'}}>
          <MyButton>
            + Create claim
          </MyButton>
        </Grid>
        <Grid marginTop='20px'>
          {claimsLoading? <div>loading</div> : <ClaimList data={claims} />}
        </Grid>
      </Grid>
    )
}

export default ClaimsPage
