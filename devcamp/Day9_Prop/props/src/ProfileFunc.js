import React from "react";

const ProfileFuncComp = (props) => {
    console.log(props)
    return (<><p>Firstname : {props.firstname}</p>
      <p>Lastname : {props.lastname}</p>
      <p>Age : {props.age}</p>
      <div>{props.children}</div></>)
  }

  export default ProfileFuncComp;