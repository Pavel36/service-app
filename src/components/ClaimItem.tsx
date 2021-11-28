import { Chip, Grid, TableCell, TableRow, Link } from '@mui/material'
import React, { FC } from 'react'

enum claimTypes {
    Hardware,
    Software,
    Troubleshooting,
    Networking
}

enum claimStatusTypes {
    DECLINED,
    NEW,
    IN_PROGRESS,
    DONE
}

interface IClaimItemProps {
    claimTitle:string,
    claimCreated:string,
    claimType:string,
    claimStatus:string
}


const ClaimItem: FC<IClaimItemProps> = ({claimTitle, claimCreated, claimType, claimStatus }) => {
    return (
        <TableRow>
            <TableCell>{claimTitle}</TableCell>
            <TableCell>{claimCreated}</TableCell>

            {(()=>{switch(claimType){
                case 'Hardware': 
                    return (
                        <TableCell>
                            <Grid container direction="row">
                                <Grid sx={{color:'#7DB59A', marginRight:'2px'}}>●</Grid>
                                <Grid>Hardware</Grid> 
                            </Grid>
                        </TableCell>
                    )
                        
                case 'Software':
                    return (
                        <TableCell>
                            <Grid container direction="row">
                                <Grid sx={{color:'#FF7675', marginRight:'2px'}}>●</Grid>
                                <Grid>Software</Grid> 
                            </Grid>
                        </TableCell>
                    )
                case 'Troubleshooting':
                    return (
                        <TableCell>
                            <Grid container direction="row"> 
                                <Grid sx={{color:'#6C5CE7', marginRight:'2px'}}>●</Grid>
                                <Grid>Troubleshooting</Grid>
                            </Grid>
                        </TableCell>
                    )
                case 'Networking':
                    return (
                        <TableCell>
                            <Grid container direction="row">  
                                <Grid sx={{color:'#FDCB6E', marginRight:'2px'}}>●</Grid>
                                <Grid>Networking</Grid>
                            </Grid> 
                        </TableCell>
                    )
            }})()}

            {(()=>{switch(claimStatus){
                case 'Declined': 
                    return(
                        <TableCell>
                            <Chip label='DECLINED' sx={{color:'#FFFFFF', backgroundColor:'#E84393'}}/>
                        </TableCell>
                    ) 
                case 'New':
                    return(
                        <TableCell>
                            <Chip label='NEW' sx={{color:'#FFFFFF', backgroundColor:'#6C5CE7'}}/>
                        </TableCell>
                    )
                case 'In progress':
                    return(
                        <TableCell>
                            <Chip label='IN PROGRESS' sx={{color:'#FFFFFF', backgroundColor:'#FDCB6E'}}/>
                        </TableCell>
                    )
                case 'Done':
                    return(
                        <TableCell>
                            <Chip label='DONE' sx={{color:'#FFFFFF', backgroundColor:'#00B894'}}/>
                        </TableCell>
                    ) 
            }})()}
            <TableCell>
                <Link href="#">Browse</Link>
            </TableCell>
        </TableRow>
    )
}

export default ClaimItem
