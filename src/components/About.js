import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <h2>a food ordering app</h2>
      <User />
      <UserClass name="Simran"/>
    </div>
  )
}

export default About