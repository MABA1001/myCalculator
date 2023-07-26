import React from 'react'
import Button from './button';




const keyPadValues=[
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','C','=','+'
];




export default function Keypad(props) {
    
function handleButtonClick(val)
{
    props.onGetInputs(val);
}
  return (
    <div className='container'>
        {keyPadValues.map(value=><Button label={value} key={value} onClick={handleButtonClick}/>)}
    </div>
    
  )
}
