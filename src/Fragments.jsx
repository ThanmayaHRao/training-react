import React, { Fragment, useState } from 'react'

const Fragments = () => {
    const[data,setdata] = useState([10,20,30,40,50,60,70,80])
  return (
    <>
      {
        data.map((data,i)=>{
          return(
              <Fragment key={i}>
                     <h1>Number :{data}</h1>
                       <p>Index : {i}</p>
            </Fragment>

          )
          
       
        })
      }
    </>
  )
}

export default Fragments
