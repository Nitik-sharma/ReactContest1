
import { useState } from 'react';
import './App.css';

function App() {
  const [num1,setNum1]=useState('');
  const [num2,setNum2]=useState('');
  const [error,setError]=useState("");
  const [sol,setSol]=useState();
  const [worn,setWorn]=useState("");

  // const sum = () => {
  //   if (isNaN(num1) || isNaN(num2)) {
  //     setError("Error");
  //     setWorn("Num1 and Num2 Cannot be empty");
  //     return;
  //   } else {
  //     setSol("Result is :"+num1 + num2);
  //   }
  
 const sub=()=>{
  if (num1==="" || num2==="") {
    setError("Error");
    setWorn("Num1 and Num2 Cannot be empty");
    return;
  }else{
    setSol(num1-num2);
  }


 }
//  const multiply=()=>{
//   if (isNaN(num1) || isNaN(num2)) {
//     setError("Error");
//     setWorn("Num1 and Num2 Cannot be empty");
//     return;
//   }else{
//     setSol(num1*num2);
//   }

//  }
//  const divide=()=>{
//   if (isNaN(num1) || isNaN(num2)) {
//     setError("Error");
//     setWorn("Num1 and Num2 Cannot be empty");
//     return;
//   }else{
//     setSol(num1/num2);
//   }

//  }
  return (
    <div className="App">
     <div className='calculator'>
     <h1>React Calculator</h1>

<input type='text' placeholder='Num 1' className='input' value={num1} onInput={(e)=>{setNum1(parseInt(e.target.value))}}/><br></br>
<input type='text' placeholder='Num 2' className='input' value={num2} onInput={(e)=>setNum2(parseInt(e.target.value))}/>

<div className='button'>
 {/* <button onClick={sum}>+</button> */}
 <button onClick={sub}>-</button>
 {/* <button onClick={multiply}>*</button> */}
 {/* <button onClick={divide}>/</button> */}
</div>

<div className='solution'>
  
  {
      error && <p>{worn}</p>    }
      {
        !error && <p>{sol}</p>
      }
  
</div>
     </div>
    </div>
  );
}

export default App;
