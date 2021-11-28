import { Grid } from '@mui/material'
import React from 'react'
import HomeIcon from './icon-home.svg'
import GlobeIcon from './icon-globe.svg'
import ArchiveIcon from './icon-archive.svg'
import PieIcon from './icon-pie-chart.svg'
import DollarIcon from './icon-dollar-sign.svg'
import DatabaseIcon from './icon-database.svg'
import ArrowIcon from './icon-navigation.svg'
import Logo from '../../pages/Group5.svg'

const Sidebar = () => {
    return (
        <Grid textAlign='center' paddingX='10px' container direction='column' sx={{background: 'linear-gradient(180deg, #D5EEE2 0%, #7DB59A 43.23%)', height:'100%'}}>
            <Grid paddingTop='20px'>
                <img src={Logo} alt="" />
            </Grid>
            <Grid paddingTop='20px'>
                <img src={HomeIcon} alt="" />
            </Grid>
            <Grid paddingTop='20px'>
                <img src={GlobeIcon} alt="" />
            </Grid>
            <Grid paddingTop='20px'>
                <img src={ArchiveIcon} alt="" />
            </Grid>
            <Grid paddingTop='20px'>
                <img src={PieIcon} alt="" />
            </Grid>
            <Grid paddingTop='20px'>
                <img src={DollarIcon} alt="" />
            </Grid>
            <Grid paddingTop='20px'>
                <img src={DatabaseIcon} alt="" />
            </Grid>
            <Grid paddingTop='20px'>
                <img src={ArrowIcon} alt="" />
            </Grid>
        </Grid>
    )
}

export default Sidebar
