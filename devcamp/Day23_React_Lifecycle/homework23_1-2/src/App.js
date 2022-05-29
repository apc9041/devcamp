
// import './App.css';
// import React from 'react';
// import { Input } from 'antd';


// function myFunction() {
//   let text;
//   let person = prompt("Please enter your name:", "Unknown User");
//   if (person === null || person === "") {
//     text = "User cancelled the prompt.";
//   } else {
//     text = "Hello " + person + "! How are you today?";
//   }
//   document.getElementById("demo").innerHTML = text;
// }


// function inputFunc() {
//   let textname = document.getElementById('name').value;
//   let text = "Hello " + textname + "! How are you today?";
//   document.getElementById("demo").innerHTML = text;
// }


// class App extends React.Component {
//   render() {
//     return (
//       <Data name="THIS IS TEST ok" label='Hello'/>
//       );
//     }
//  }

// class Data extends React.Component {
//   constructor() {
//     super();
//     console.log('constructor');
//     this.state = { name: 'Unknown User' }
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps');
//     return props
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//     myFunction()
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate');
//       if (nextState.name === nextProps.name) {
//       alert('คุณกรอกชื่อซ้ำ')

//     }
//     return true
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('getSnapshotBeforeUpdate');
//     return 'UPDATE'
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log(snapshot);
//     console.log('componentDidUpdate');
//   }

//   render() {
//     console.log('render');
//   return <><div className='BoxA' >
//     {/* <h1>{this.props.name}</h1><h3>{this.state.value}</h3> */}
//     <h2 id='demo'>Welcome to my Web</h2>
//     <Input id='name' />
//     <button onClick={inputFunc}>Change Your Name</button>

//     {/* <input type={"text"}  style={{ width : "25%"}} id={"inp"}/>
//         <button onClick={()=>{
//           const value = document.getElementById("demo").value
//           this.setState({ name: value })
//         }} style={{ width : "25%"}} >Change Your Name</button>
//         <ul id='result'></ul>
//      */}

//     {/* <input 
//       type="button" 
//       value="click" 
//       onClick=
//       {() => this.setState({ value: this.state.value + 1 })} 
//       /> */}
//       </div>
//       </>
//   }
// }

// export default App;

//-----------------------------------------------------------this.state----------------------------
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = { name: 'Unknown User' }
  }
  componentDidMount() {
    const name = prompt("Type ur name !")
    this.setState({ name: name })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name && nextState.name !== " ") {
      if (nextState.name === this.state.name) {
        alert("คุณกรอกชื่อซ้ำ");
      }
      else {
        let result = document.getElementById("result")
        result.innerHTML +=
          `<ur style="list-style: none;"><li style={{padding : "20px 20px"}} > prevName : ${this.state.name} <br/> newName : ${nextState.name}  </li></ur>`

        return true
      }
    }
    else {
      this.setState({ name: "Unknown User" })
      return false
    }
    // return nextState.name !== " " && nextState.name !== "" ? true : false
  }

  render() {
    return (
  
        <div style={{
          display: "flex",
          flexDirection: "column"
        }}><h1>Welcome to my Web</h1>
          <h1>Hello {this.state.name}</h1>
          <div style={{ margin: 'auto', width: '200px' }} >
            <input type={"text"} style={{ width: "100%" }} id={"input"} /><br />
            <button onClick={() => {
              const name = document.getElementById("input").value
              this.setState({ name: name })
            }} style={{ width: "100%" }} >Change Your Name</button>
          </div>
          <ul id='result'> 
          </ul>
        </div>

    )
  }
}



