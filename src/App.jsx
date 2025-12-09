import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Side1 from "./Components/side1";
import Footer from "./Components/Footer";
import Side2 from "./Components/Side2";

class App extends React.Component{
    render(){
        return(
            <div>
              <Navbar/>
              <Main/>
              <section style={{display:"flex"}}>
                <Side1/>
                <Side2/>
              </section>
              <Footer/>
            </div>
        )
    }
}

export default App;