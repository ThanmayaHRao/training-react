import React, { useState } from 'react'

const Hooks = () => {
    const[count,setCount] = useState(0);
 

    let increment=()=>{
        setCount(count +1)

    }
     let decrement=()=>{
        setCount(count -1)
    }
     let reset=()=>{
         setCount(0)
    }
   
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
       <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Hooks
