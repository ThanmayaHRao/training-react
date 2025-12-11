import React, { Component } from 'react'

export default class State extends Component {

//       constructor(){
//     super();
//     this.state={
//       name:"surya",
//       age:21,
//       desig:["dev","test"],
//       address:{
//         city:"dhaema",
//         area:"seerampatti"
//       }
//     }
//   }

state={
    name:"raghav",
    comapny:'INFOSYS',
    age:"24"
}
changeName = ()=>{
    setInterval(()=>{
        this.setState({name:"thanmaya"})
    },3000)
    
}

  render() {
    console.log(this.state)
    return (
      <div>
        {/* <h1>{this.state.name}</h1>
        <p>{this.state.desig[0]}</p>
        <p>{this.state.address.city}</p> */}
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>change name</button>
      </div>
    )
  }
}

