import { Avatar, Grid, Input, InputAdornment } from '@mui/material'
import React from 'react'
import LogOutIcon from './icon-log-out.svg'
import AvatarIcon from './Ivan.png'
import BellIcon from './icon-bell.svg'
import SearchIcon from './icon-search.svg'
import { useDispatch } from 'react-redux'
import { AuthActionCreators } from '../../store/reducers/auth/action-creators'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Header = () => {
    const dispatch = useDispatch()
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
            <button style={{background:'transparent', border: 0, cursor: 'pointer'}} onClick={()=>dispatch(AuthActionCreators.logout())}><img src={LogOutIcon} alt=''/></button>
            
        </Grid>
    )
}

export default Header
