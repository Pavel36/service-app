import { Avatar, Grid, Input, InputAdornment } from '@mui/material'
import React from 'react'
import LogOutIcon from './icon-log-out.svg'
import AvatarIcon from './Ivan.png'
import BellIcon from './icon-bell.svg'
import SearchIcon from './icon-search.svg'

const Header = () => {
    return (
        <Grid container direction='row'>
            <Input
                placeholder='Search'
                endAdornment={
                    <InputAdornment position="end">
                        <img src={SearchIcon} alt='search'></img>
                    </InputAdornment>
            }/>
            <img src={BellIcon} alt=''/>
            <Avatar alt="Ivan Ivanov" src={AvatarIcon} />
            <img src={LogOutIcon} alt=''/>
        </Grid>
    )
}

export default Header