import React, { useEffect, useState } from 'react'
import { GlobalDataContext } from '../contextapi/Contextapi'

const ContextAPI = ({ children }) => {
    const[data,setdata]=useState([]);

    useEffect(() =>{
        fetch("https://api.github.com/users")
           .then(res=>res.json()).then(val=>{
                setdata(val);
                console.log(val);
           })
            .catch(err=>{console.log(err)})
    },[])

  return (
    <GlobalDataContext.Provider value={data}>
      {children}
    </GlobalDataContext.Provider>
  )
}

export default ContextAPI
