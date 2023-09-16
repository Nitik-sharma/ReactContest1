import React, { useState } from 'react'
import "./App.css"

function Calculator() {
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    const [error,setError]=useState("");
    const [result ,setResult]=useState(null);

    const validation=()=>{
        if(num1==="" || num2==="" || isNaN(num1) || isNaN(num2)){
          setError("Num1 and Num2 Cannot be empty !");
          return false;
        }
        setError(null)
        return true;
    }

    const add=()=>{
      if(validation()){
        setResult(parseFloat(num1)+parseFloat(num2));
      }
    }

    const subtract=()=>{
      if(validation()){
        setResult(parseFloat(num1)-parseFloat(num2));
      }
    }

    const multiply=()=>{
      if(validation()){
        setResult(parseFloat(num1)*parseFloat(num2));
      }
    }

    const divide=()=>{
      if(validation()){
       if(num2!=="0"){
        setResult(parseFloat(num1)/parseFloat(num2));
       }else{
        setError("We cannot divide  by 0");
       }
      }
    }
  return (
    <div className='container'>
       <div className='calculator'>
      <h1>React Calculator</h1>

      <input type='text' placeholder='NUM 1' onChange={(e)=>setNum1(e.target.value)} value={num1} className='input'/>

      <input type='text' placeholder='NUM 2' onChange={(e)=>setNum2(e.target.value)} value={num2} className='input'/>

      <div className='button'>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>
      <div className='error'> 
        {
          error ? <p className="red">{error}</p>:(result!=null?<p className="green">sucess</p>:null)
        }
      </div>
     <div className='result'>
{result!=null ?`Result :${result}`:null}
     </div>
    </div>
    </div>
   
  )
}

export default Calculator