import React from 'react'
import './Button.css'

export default function Button(props) {

  return (
    <button style={props.label=="C"?{backgroundColor:"#BF1E2D"}:{backgroundColor:"#3c6e71"}} className='btn' onClick={props.onClick.bind(null,props.label)}>{props.label}</button>
  )
}
