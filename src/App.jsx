import './App.css'
import Display from './Components/Display'
import Keypad from './Components/keypad'
import { useState } from 'react';

function App() {
  const [enteredKeys,setEnterdKeys]=useState('');

  const calculateREsult=(string)=>{
    setEnterdKeys(eval(string))
};


  const gettingInputsHandler=(val)=>{

    if(val=='C')
    {
      setEnterdKeys("");
    }
    else if(val==="="){
      calculateREsult(enteredKeys)
    }else{
      setEnterdKeys((prvStat)=>prvStat+=val)
    }
  }

  return (
    <div className='main'>
    <Display onKeyPress={enteredKeys}/>
    <Keypad onGetInputs={gettingInputsHandler}/>  
    </div>
  )
}

export default App
