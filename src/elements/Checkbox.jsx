import React from 'react'

export default function Checkbox(props) {
    return (
        <div id={props.checkboxcontainer} className='d-flex '>
            <input id={props.checkboxid} type="checkbox" value={props.value}></input>
            <span>{props.checkboxText}</span>            
        </div>
    )
}
