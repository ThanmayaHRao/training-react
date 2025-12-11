import { Component } from "react";

class Cbcprop extends Component{
    render(){
        console.log(this);
        return(
         <div>
            Cbcprop
            <hr />
            <h1>{this.props.username}</h1>
            <h1>{this.props.startedin}</h1>
            {
                this.props.isPresent == true ?<h1>yes</h1>:<h1>No</h1>
            }
            {this.props.courses}
            <h2>{this.props.address.city}</h2>
            <button onClick={this.props.sendfun}>click</button>
         </div>   

        )
    }
}
export default Cbcprop;