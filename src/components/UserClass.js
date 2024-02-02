import { name } from "ejs";
import React from "react";

class UserClass extends React.Component {

    constructor(props) {
       super(props)
       this.state = {
        count:0
       }
    }

  render() {
    return (
      <div className="user-card">
          <h2><span>{this.state.count}</span>{this.props.name}</h2>
          <button onClick={() => {
            this.setState({
                count : this.state.count +1
            })
          }}>click</button>
          <h3>location</h3>
          <h3>contact</h3>
          <h4>github link</h4>
      </div>
    );
  }
}

export default UserClass