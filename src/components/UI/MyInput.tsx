import { Input } from '@mui/material'
import React from 'react'

const MyInput = (props: any) => {
    return (
        <div style={{display:'inline-block', marginRight:'10px', float:'left'}}>
            <label style={{display:'block'}}>{props.title}</label>
            <input {...props.register} style={{background: '#C2C2C2', borderRadius:'16px'}} placeholder={props.placeholder} value={props.value}/>
            <div>{props.errors && <span>This field is required</span>}</div>
        </div>
           
    )
}

export default MyInput
