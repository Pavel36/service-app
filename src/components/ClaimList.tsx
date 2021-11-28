import { Grid, Table, TableRow, TableCell, TableBody, TableHead, TableContainer, Paper } from '@mui/material'
import React from 'react'
import ClaimItem from './ClaimItem'

const mockClaims = [
    {
        title:'Figma smart web system for to build',
        created:'12/04/2021',
        type:'Hardware',
        status:'DECLINED'
    },
    {
        title:'Figma smart web system for to build',
        created:'12/04/2021',
        type:'Software',
        status:'NEW'
    },
    {
        title:'Figma smart web system for to build',
        created:'12/04/2021',
        type:'Troubleshooting',
        status:'IN PROGRESS'
    },
    {
        title:'Figma smart web system for to build',
        created:'12/04/2021',
        type:'Networking',
        status:'DONE'
    }
]

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
                <ClaimItem key={claim.createdAt} claimTitle={claim.title} claimCreated={claim.createdAt} claimType={claim.type.name} claimStatus={claim.status.name}/>
            )}
            </TableBody>
        </Table>
        </TableContainer>
    )
}

export default ClaimList
