import React from 'react'
import './Display.css'


export default function Display(props) {
  return (
    <div className='input-box'>
        <label>
            <input type="text" name="display" id="1" value={props.onKeyPress} onChange={props.onInputChange}/>
        </label>
    </div>
  )
}
