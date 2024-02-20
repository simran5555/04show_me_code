import React from "react";


class Contact extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
    <div className="w-3/4 mx-auto">
      <h1 className="font-bold text-lg p-4">CONTACT US</h1>
    
      <form action="">
        <input 
        className="border border-black p-2 m-2" type="text" placeholder="name" />
        <input
        className="border border-black p-2 m-2" type="text" placeholder="name"/>
        <button>Submit</button>
      </form>
    
    </div>
      )
  }
}

export default Contact;