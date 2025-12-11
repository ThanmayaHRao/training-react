import React from 'react'

const Propschildren = (props)=>{
    console.log(props)
    return(
         <div>Propschildren
        <hr />
        <h1>{props.username}</h1>
        <h1>{props.course}</h1>
        {props.children[2]}
      
    </div>
    )
}
export default Propschildren
