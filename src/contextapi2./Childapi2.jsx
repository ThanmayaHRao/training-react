import React from 'react'
import { GlobalDataContext } from '../contextapi/Contextapi'

const Childapi2 = (props) => {
    const data =React.useContext(GlobalDataContext)
  return (
    <div>child2
      {
        data.map((user)=>{
            return(
                <img key={user.id} src={user.avatar_url} alt="" style={{width:"20px"}} />
            )
            
        })
      }
    </div>
  )
}

export default Childapi2
