import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends Component {

  constructor(props) {
    super(props)
    console.log("parent constructor")
  }
  
  componentDidMount() {
    console.log("parent did mount")
  }

  render(){
    console.log("parent render")
    return (
      <div>
        <h1>About us</h1>
        <h2>a food ordering app</h2>
        <User />
        <UserClass name="Simran"/>
        <UserClass name="Felix"/>
        
      </div>
    )
  }
}

export default About