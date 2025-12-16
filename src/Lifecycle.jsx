// import React, { Component, Fragment } from 'react'

// export default class Lifecycle extends Component {
//   constructor() {
//     super();
//     console.log("constructor printing");

//     this.state = {
//       count: 0,
//       users: []
//     };
//   }


//   static getDerivedStateFromProps(props , state){
//     return{
//       count : props.countVal
//     }
//   }

//   componentDidMount() {
//     fetch("https://api.github.com/users")
//       .then(res => res.json())
//       .then(data => {
//         this.setState({ users: data });
//       })
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//       <div>
//         <h2>Mounting</h2>
//         <h1>{this.state.count}</h1>

//         {this.state.users.map((user, i) => (
//           <Fragment key={i}>
//             <img src={user.avatar_url} alt="avatar" width="100" />
//             <h3>{user.login}</h3>
//           </Fragment>
//         ))}
//       </div>
//     );
//   }
// }
// import React, { Component } from 'react'

// export default class Lifecycle extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       count :0
//     }
//   }
//   static getDerivedStateFromProps(Props , state){
//     return{
//       count : props.countVal
//     }
//   }

//   componentDidMount(){
//     setTimeout(()=>{
//       this.setState({count : 10000})
//     },4000)
//   }
//   shouldComponentUpdate(){
//     return false;
//   }
//   changeVal=()=>{
//     this.setState({count:this.state.count+1})
//   }
//   getSnapshotBeforeUpdate(prevProps , prevState){
//     console.log(prevState)
//     return
//   }
//   componentDidUpdate(){
//     console.log(this.state.count)
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.changeVal}>click</button>
        
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import Childcomp from './Childcomp'

// export default class Lifecycle extends Component {
//   state ={
//     display :true
//   }
//   removeComp=()=>{
//     if(this.state.display == true)
//     {
//       this.setState({display:false})
//     }
//   }
//   render() {
//     console.log(this.state.display)

//     let comp;
//     if(this.state.display == true)
//     {
//       comp = <Childcomp/>
//     }
//     return (
//       <div>
//         {comp}
//         <button onClick={this.removeComp}>remove child comp</button>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'

export default class Lifecycle extends Component {
 constructor(props){
    super(props)

    this.state ={
      count:0
    }
 }

//  static getDerivedStateFromProps(Props , state){
//     return{
//       count : Props.countVal
//     }
//   }
   componentDidMount(){
    setTimeout(()=>{
      this.setState({count : 10000})
    },4000)
  }

// changeVal= ()=>{
//   this.setState({count:this.props.countVal+1})
// }

  // getSnapshotBeforeUpdate(prevProps,prevState){
  //   console.log(prevProps)
  //   console.log(prevState)
  //   return null;
  // }
  // componentDidUpdate(prevProps,prevState){
  //    console.log(prevProps)
  //     console.log(this.state.count)
  // }

  


  render() {
    return (
      <div>
         <h1>{this.state.count}</h1>
        <button onClick={this.changeVal}> Click</button>
      </div>
    )
  }
}

