import React, { useState } from 'react'


const Ittirate = () => {
    // let x = ["than","csc","ddvd","csvds "]
    const[data,setdata]=useState(["than","csc","ddvd","csvds "])
   
  return (
    <div>
      {
        data.map((data,i)=>{
            return(
            <li key={i}>{data}</li>
        )
            
        })
      }
    </div>
  )
}

export default Ittirate
