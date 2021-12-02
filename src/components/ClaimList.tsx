import { Grid, Table, TableRow, TableCell, TableBody, TableHead, TableContainer, Paper } from '@mui/material'
import React from 'react'
import ClaimItem from './ClaimItem'


const ClaimList = (props:any) => {
    return (
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {props.data.map((claim:any)=>
                <ClaimItem key={claim.createdAt} claimTitle={claim.title} claimCreated={claim.createdAt} claimType={claim.type} claimStatus={claim.status}/>
            )}
            </TableBody>
        </Table>
        </TableContainer>
    )
}

export default ClaimList
