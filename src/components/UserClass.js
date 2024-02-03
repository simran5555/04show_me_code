import React from "react";

class UserClass extends React.Component {

    constructor(props) {
       super(props)
       this.state = {
        count:0
       }
       
       //console.log(this.props.name + "child constructor")
    }

    async componentDidMount() {
        //console.log(this.props.name + "child component did mount")
        const data = await fetch("https://api.github.com/users/simran5555")
        const json = await data.json();
        console.log(json);
    }

    componentDidUpdate() {
      console.log("component updated")
    }

    componentWillUnmount() {
      console.log("component unmounted")
    }

  render() {
    console.log(this.props.name + "Child Render")
    const {name} = this.props
    return (
      <div className="user-card">
          <h2><span>{this.state.count}</span>{name}</h2>
          <h3>location</h3>
          <h3>contact</h3>
          <h4>github link</h4>
      </div>
    );
  }
}

export default UserClass