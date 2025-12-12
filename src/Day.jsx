// import React, { Component } from 'react'

// export default class Day extends Component {
//   state = {
//     day: 0
//   }

//   render() {
//     if (this.state.day === 0) return <h1>Sunday</h1>
//     else if (this.state.day === 1) return <h1>Monday</h1>
//     else if (this.state.day === 2) return <h1>Tuesday</h1>
//     else if (this.state.day === 3) return <h1>Wednesday</h1>
//     else if (this.state.day === 4) return <h1>Thursday</h1>
//     else if (this.state.day === 5) return <h1>Friday</h1>
//     else if (this.state.day === 6) return <h1>Saturday</h1>
//   }
// }
import React, { Component } from 'react'

export default class Day extends Component {
  state = {
    day: ""
  }

  handleChange = (e) => {
    // convert to number
    this.setState({ day: Number(e.target.value) });
  }

  render() {
    let dayValue;

    if (this.state.day === 0) dayValue = "Sunday";
    else if (this.state.day === 1) dayValue = "Monday";
    else if (this.state.day === 2) dayValue = "Tuesday";
    else if (this.state.day === 3) dayValue = "Wednesday";
    else if (this.state.day === 4) dayValue = "Thursday";
    else if (this.state.day === 5) dayValue = "Friday";
    else if (this.state.day === 6) dayValue = "Saturday";
    else if (this.state.day !== "") dayValue = "Invalid day";

    return (
      <>
        <input 
          type="number" 
          placeholder="enter day number (0-6)"
          value={this.state.day} 
          onChange={this.handleChange}
        />

        <h2>The day number is: {this.state.day}</h2>

        {this.state.day !== "" && (
          <h1>The day is: {dayValue}</h1>
        )}
      </>
    );
  }
}

