import React from 'react'

const MyButton = (props: any) => {
    return (
        <button style={{color:'#FFF', backgroundColor:'#7DB59A', borderRadius:'16px', cursor: 'pointer', border:'none', fontSize:18, padding: '10px 20px'}}>
            {props.children}
        </button>
    )
}

export default MyButton
