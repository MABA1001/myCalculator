import './App.css'
import Display from './Components/Display'
import Keypad from './Components/keypad'
import { useState } from 'react';



function App() {
  const [enteredKeys,setEnterdKeys]=useState('');

  const calculateResult=(expression)=>{

    console.log(expression)
    try{
      if(expression!=="")
      {
        //setEnterdKeys(eval(expression));
        const processedExpression = expression.replace(/(?<!\d)0+(?=\d+(\.\d*)?)/g, "");
      const result = parseFloat(eval(processedExpression));
      setEnterdKeys(result);
      }
    }
    catch(e)
    {
      setEnterdKeys("Error 'Press C'");
    }
   
};

const gettingChangeHandler=(e)=>{
console.log(e.target.value)


if(e.target.value.slice(-1)==="="){
  calculateResult(e.target.value.slice(0,e.target.value.length-1))
  return;
}
setEnterdKeys(e.target.value)


}
const gettingInputsHandler=(val)=>{

    if(val=='C')
    {
      setEnterdKeys("");
    }
    else if(val==="="){
      calculateResult(enteredKeys)
    }else{
      setEnterdKeys((prvStat)=>prvStat+=val)
    }
  }

  return (
    <div className='main'>
    <Display onKeyPress={enteredKeys} onInputChange={gettingChangeHandler}/>
    <Keypad onGetInputs={gettingInputsHandler}/>  
    </div>
  )
}

export default App;
