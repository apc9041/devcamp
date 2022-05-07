import React from "react";

class ProfileClassComp extends React.Component {
    render() {
      console.log(this.props)
      return (<><p>Firstname : {this.props.firstname}</p>
        <p>Lastname : {this.props.lastname}</p>
        <p>Age : {this.props.age}</p>
        <p>{this.props.children}</p></>)
    }
  }
  export default ProfileClassComp;