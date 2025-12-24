import React, { useContext } from 'react'
import Childapi2 from './Childapi2'
import { GlobalDataContext } from '../contextapi/Contextapi'

const Childapi1 = () => {
    const data = useContext(GlobalDataContext)
  return (
    <div>child1
        <hr />
      <Childapi2/>

      {
        data.map((user)=>{
            return(
                <h1 style={{display:'flex', width:"20px", fontFamily:"Arial", fontSize:"12px"}} key={user.id}>{user.login}</h1>
            )
            
        })
      }
    </div>
  )
}

export default Childapi1
