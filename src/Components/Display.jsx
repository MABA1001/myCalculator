import React from 'react'
import './Display.css'


export default function Display(props) {
  return (
    <div>
        <label>
            <input type="text" name="display" id="1" value={props.onKeyPress} readOnly/>
        </label>
    </div>
  )
}
