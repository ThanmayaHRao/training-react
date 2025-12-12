import React, { useState } from 'react'

const Switch = () => {
    const[islogged,setislogged] = useState(0);
    let clicktrue = ()=>{
        setislogged(1)
      

    }
    let clickfalse =()=>{
        setislogged(2)
       
        
    }

  

    return(
        <>
          {islogged ==1 && <h1>welcom</h1>}
              {islogged == 2 && <h1>NOt weelcom</h1>}
                {islogged == 0 && <h1>press true or false</h1>}

         <button onClick={clicktrue}>true</button>
        <button onClick={clickfalse}>false</button>
        </>
       
    )
   

}




export default Switch
