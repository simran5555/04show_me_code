import React from "react";

class UserClass extends React.Component {

    constructor(props) {
       super(props)
       this.state = {
        userInfo: {
          name: "simran",
          img_url : "https://picsum.photos/640/480/?image=576",
          link : "https://www.google.com",
          join_date : "24-3-01"
        }
        //count:0
       }
       
       //console.log(this.props.name + "child constructor")
    }

    async componentDidMount() {
        //console.log(this.props.name + "child component did mount")
        const data = await fetch("https://api.github.com/users/simran5555")
        const json = await data.json();
        console.log(json);
        this.setState({
          userInfo : {
            name : json.login,
            img_url : json.avatar_url,
            link : json.html_url,
            join_date : json.created_at
          } 
        })
    }

    componentDidUpdate() {
      //console.log("component updated")
    }

    componentWillUnmount() {
      //console.log("component unmounted")
    }

  render() {
    //console.log(this.props.name + "Child Render")
    //const {name} = this.props
    console.log(this.state.userInfo.name)
    return (
      <div className="user-card">
          <h3>{this.state.userInfo.name}</h3>
          <img src={this.state.userInfo.img_url} alt="" />
          <h3><a href={this.state.userInfo.link}>go to profile</a></h3>
          <h4>{this.state.userInfo.join_date}</h4>
      </div>
    );
  }
}

export default UserClass