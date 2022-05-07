
import './App.css';
import React from 'react';

const ProfileFuncComp = (props) => {
  console.log(props)
  return (<><p>Firstname : {props.firstname}</p>
    <p>Lastname : {props.lastname}</p>
    <p>Age : {props.age}</p></>)
}

class ProfileClassComp extends React.Component {
  render() {
    console.log(this.props)
    return (<><p>Firstname : {this.props.firstname}</p>
      <p>Lastname : {this.props.lastname}</p>
      <p>Age : {this.props.age}</p></>)
  }
}

function App() {
  return (
    <>
      <ProfileClassComp firstname="Poppie" lastname="Finney" age="35">Student1</ProfileClassComp>
      <ProfileFuncComp firstname="Hollie" lastname="Chang" age="32">student2</ProfileFuncComp>
    </>
  );
}

export default App;
