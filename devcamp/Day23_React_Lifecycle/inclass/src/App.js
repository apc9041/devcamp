import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Form, Input } from 'antd';

// class App extends React.Component {
//   render() {
//     return (
//       <Data name="THIS IS TEST ok" label='Hello'/>
//       );
//     }
//  }
 
//----------------------------------------------------------Mounting---------------------------------------------
//  class Data extends React.Component {
//     constructor() {
//     super();
//       console.log('constructor');
//       this.state = { value: 1 }
//     }
//     static getDerivedStateFromProps(props, state) {
//       console.log('getDerivedStateFromProps');
//       return props
//     }
//     componentDidMount() {
//       console.log('componentDidMount');
//     }


//     render() {
//       console.log('render');
//       return <div><h1>{this.props.name}</h1><h2>{this.props.label}</h2></div>
//     }
//   }

//-----------------------------------------------Updating 1---------------------------------------------------

// class Data extends React.Component {
//   constructor() {
//     super();
//     console.log('constructor');
//     this.state = { value: 0 }
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps');
//     return props
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate', nextState);
//     return nextState.value > 0 ? true : false
//   }

//   render() {
//     console.log('render');
//     return <>
//     <h1>{this.props.name}</h1>
//     <h3>{this.state.value}</h3>
//     <input 
//       type="button" 
//       value="click" 
//       onClick={() => this.setState({ value: this.state.value + 1 })} />
//     </>}
// }

//--------------------------------------------Updating 2------------------------------------------------

// class Data extends React.Component {
//   constructor() {
//     super();
//     console.log('constructor');
//     this.state = { value: 1 }
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps');
//     return props
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate', nextState);
//     return nextState.value < 10 ? true : false
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('getSnapshotBeforeUpdate');
//     return 'UPDATE'
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log(snapshot);
//     console.log('componentDidUpdate');
//   }

//   calculate = (a, b) => {
//     console.log (a*b);
//   };

//   render() {
//     console.log('render');
//     return <>
//     <h1>{this.props.name}</h1>
//     <h3>{this.state.value}</h3>
//     <input 
//       type="button" 
//       value="click" 
//       onClick={() => {
//         this.calculate(1,6)
//         return this.setState({ value: this.state.value + 1 });
//       }} />
    
//       </>
//   }
// }

//-------------------------------------------Unmounting--------------------------------------------------

function myFunction() {
  let text;
  let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = text;
}


class App extends React.Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = { showComponent: true }
  }

  render() {
    return (
      <><input type="button" value="SHOW / HIDE" 
      onClick=
      {myFunction()}
      // {() => this.setState({ showComponent: !this.state.showComponent })} 
      />
      {this.state.showComponent ? <Data name="THIS IS TEST" /> : <h1>Component is HIDE</h1>}
      </>
    );
  }
}

class Data extends React.Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = { value: 1 }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return props
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return nextState.value < 10 ? true : false
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return 'UPDATE'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    console.log('componentDidUpdate');
  }

componentWillUnmount() {
  console.log('componentWillUnmount');
  return 
  // alert(myFunction);
  // <Form>
  //   <Form.Item name='input' label='input'>
  //     <Input type='password'></Input>
  //   </Form.Item>
  //   </Form>);
}

render() {
  console.log('render');
  return <>
  <h1>{this.props.name}</h1>
  <h3>{this.state.value}</h3>
  <input  type="button" 
          value="click" 
          onClick={() => this.setState({ value: this.state.value + 1 })} />
</>}
}


 export default App;