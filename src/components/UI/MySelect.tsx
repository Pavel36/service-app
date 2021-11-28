import React from 'react'

const MySelect = (props: any) => {
    return (
        <div style={{display:'inline-block', marginRight:'10px', float:'left'}}>
            <label style={{display:'block'}}>{props.title}</label>
            <select {...props.register} style={{background: '#C2C2C2', borderRadius:'16px'}} placeholder={props.placeholder} defaultValue={props.defaultValue}>
                {props.options.map((option:any)=><option key={option.slug} value={option.slug}>{option.name}</option>)}
            </select>
            <div>{props.errors && <span>This field is required</span>}</div>
        </div>
        
    )
}

export default MySelect
