import React from 'react';
import './input.css';
const input=(props)=>{
    return <div className='ahsan'>
        <input onChange={props.changed} value={props.current}></input>
    </div>
}
export default input;