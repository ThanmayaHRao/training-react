// // import React from "react";
// // import Navbar from "./Components/Navbar";
// // import Main from "./Components/Main";
// // import Side1 from "./Components/side1";
// // import Footer from "./Components/Footer";
// // import Side2 from "./Components/Side2";

// // class App extends React.Component{
// //     render(){
// //         return(
// //             <div>
// //               <Navbar/>
// //               <Main/>
// //               <section style={{display:"flex"}}>
// //                 <Side1/>
// //                 <Side2/>
// //               </section>
// //               <Footer/>
// //             </div>
// //         )
// //     }
// // }

// // export default App;


// // import React from   "react";
// // import Cbcprop from "./Cbcprop"

// // class App extends React.Component{
// //   render(){
// //     return(
// //       <div>
// //         <h3>App component</h3>
// //         <Cbcprop
// //         username = "excelr"
// //         startedin = {2013}
// //         isPresent={true}
// //         courses = {["fsd","cloud","DB"]}
// //         address = {{city:"ben",area:"btm"}}
// //         sendfun={function(){alert("hey bro")}}
// //         />
// //       </div>
// //     )
// //   }
// // }

// // export default App;
// // import react from "react"
// // import Propschildren from "./Propschildren"
// // import Propschild from "./Propschild"


// // const App =()=>{
// //   return (
// //     <div>app
// //       <hr />
// //       <Propschildren username="harshit" course = "fsd">
// //         <h1>prosp children paased</h1>
// //         <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem maxime eum dolorum.</h2>
// //         <Propschild/>
// //       </Propschildren>
// //     </div>
// //   )
// // }
// // export default App

// // import React from 'react'
// // import Child1 from './propdrilling/child1'



// // function App() {
// //   let company = "exclr"

// //   return (
// //     <div>
// //       app
// //       <hr />
// //       <Child1 data={company} />
// //     </div>
// //   )
// // }

// // export default App

// // import React, { Component, Fragment } from 'react'
// // import State from './State'
// // import Hooks from './Hooks'
// // import Ittirate from './Ittirate'
// // import Fragments from './Fragments'

// // export default class App extends Component {



// //   render() {
// //     return (
// //       <div>
// //         {/* <State/> */}
// //         {/* <Hooks/> */}
// //         {/* <Ittirate/> */}
// //         {/* <Fragments/> */}

// //       </div>
// //     )
// //   }
// // }

// // import React, { Component } from 'react'
// // import Home from './Home'
// // import Login from './Login'

// // export default class App extends Component {
// //   state = {
// //     isloggedin :true
// //    }
// //   render() {
// //     if(this.state.isloggedin == true){
// //       return(
// //         <Home/>
// //       )

// //     }
// //     else{
// //       return(
// //         <h1><Login/></h1>
// //       )
// //     }
   
// //   }
// // }

// // import React, { useState } from 'react'
// // import Home from './Home'
// // import Login from './Login'

// // const App = () => {
// //   const[logged,setlogged] = useState(true)
  
// //   if (logged==true) {
// //       return(
// //         <Home/>
// //       )
// //   }
// //   else{
// //     return(
// //       <Login/>
// //     )
// //   }
// // }

// // export default App

// // import React, { Component } from 'react'
// // import Day from './Day'
// // import Switch from './Switch'

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         {/* <Day/> */}
// //         <Switch/>

// //       </div>
// //     )
// //   }
// // }

import React from 'react'
import Navbars from './tesla/Navbars'
import Lifecycle from './Lifecycle'
// import Effects from './Effects'
import Parent1 from './contextapi/Parent1'

import ContextAPI from './contextapi2./ContextAPI'
import Parentapi from './contextapi2./Parentapi'
import Usememo from './Usememo'


const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Navbars/> */}
      {/* <Lifecycle countVal ={1000}/> */}
      {/* <Effects/> */}
      {/* <Contextapi>
        <Parent1/>
      </Contextapi> */}
     {/* <ContextAPI>
        <Parentapi/>
     </ContextAPI> */}
     <Usememo/>
      
     
    </div>
  )
}

export default App




