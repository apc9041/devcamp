import logo from './logo.svg';
import './App.css';
import React from 'react';


function ExFunctionComp() {
  return <p>Thisis React Function Component</p>;
}

class ExClassComp extends React.Component {
  render() {
    return <p>This is React Class Component</p>;
  }
}

function App() {
  return (
    <div className="App">
      <ExClassComp />
      <ExFunctionComp />
    </div>
  );
}



export default App ;
