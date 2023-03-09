import React from "react";
import { useState } from "react"
const App=()=>
{
  
  const biodata=[
    {
      id:0, name:"raj"
    },
    {
      id:1, name:"dinesh"
    },
    {
      id:2, name:"mohan"
    }
  ]
  const [myArray,setArray]=useState(biodata);
  const clearArray=()=>
  {
    setArray([]);
  }
  return(
    <>
    <h1>hello</h1>
    {
      myArray.map((curElm)=> <h1>Name:{curElm.myName}& Age:{curElm.id}</h1>)
        
      }
      <button onClick={clearArray}></button>
    
    </>
  )
}
export default App;