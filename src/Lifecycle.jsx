import React, { Component, Fragment } from 'react'

export default class Lifecycle extends Component {
  constructor() {
    super();
    console.log("constructor printing");

    this.state = {
      count: 0,
      users: []
    };
  }


  static getDerivedStateFromProps(props , state){
    return{
      count : props.countVal
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>Mounting</h2>
        <h1>{this.state.count}</h1>

        {this.state.users.map((user, i) => (
          <Fragment key={i}>
            <img src={user.avatar_url} alt="avatar" width="100" />
            <h3>{user.login}</h3>
          </Fragment>
        ))}
      </div>
    );
  }
}
