
import './App.css';
// import React from 'react';
// import ProfileClassComp from './ProfileClass';
// import ProfileFuncComp from './ProfileFunc';
import React, { useState } from 'react';

//Example 1
// function App() {
//   return (
//     <>
//       <ProfileClassComp firstname="Poppie" lastname="Finney" age="35"><h1>Student1</h1></ProfileClassComp>
//       <ProfileFuncComp firstname="Hollie" lastname="Chang" age="32"><h1>student2</h1></ProfileFuncComp>
//     </>
//   );
// }



//Example 2
// const RenderProps = (props) => {
//   return (<>{props.component}</>)
// }
// const Display = (props) => {
//   return (
//     <div>
//       <p>string: {props.myStr}</p>
//       <p>number: {props.myNumber}</p>
//       <p>false value: {props.myBool.toString()}</p>
//       <p>true value: {props.myTrueBool.toString()}</p>
//       <p>null: {props.myNull === null && 'yes'}</p>
//       <p>undefined: {props.myUndefinded === undefined && 'yes'}</p>
//       <p>object: {JSON.stringify(props.myObj)}</p>
//       <p>array: {JSON.stringify(props.myArray)}</p>
//       <p>Date: {props.myDate.toString()}</p>
//       <p>function: {props.myShowNameFunc('John')}</p>
//       <p>Component:</p>
//       <RenderProps component={(<ProfileFuncComp firstname="Hollie" lastname="Chang" />)} />
//     </div>
//   )
// }
// const ProfileFuncComp = (props) => {
//   return (<><p>Firstname : {props.firstname}</p>
//     <p>Lastname : {props.lastname}</p></>)
// }
// function App() {
//   const str = 'hello react!'
//   const number = 5
//   const bool = false
//   const nullValue = null
//   const undefinedValue = undefined
//   const obj = { name: 'somchai', b: 2 }
//   const arr = ['john', 2, 'smith', 4]
//   const now = new Date()
//   const showNameFunc = (name) => {
//     return 'my name is ' + name
//   }
//   return (
//     <Display myStr={str} myNumber={number} myBool={bool} myTrueBool myNull={nullValue} myUndefinded={undefinedValue} myObj={obj} myArray={arr} myDate={now} myShowNameFunc={showNameFunc}
//     />
//   );
// }



// Example 
// const changeForm = (e) => {
//   console.log(e.target.value);
//   console.log(e.target.type, e.target.name);
// }
// const blurForm = (e) => {
//   alert(`You out of Focus with Firstname "${e.target.value}"`)
// }
// function App() {
//   return (
//     <><p>Firstname</p><input type="text" name="firstname" onBlur={blurForm} onChange={changeForm} /></>
//   );
// }



// Example Event
// const people = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Somchai' },
//   { id: 3, name: 'Derp' }
// ]
// const clickButton = (e, name) => {
//   alert(`You click on name "${name}"`)
// }
// function App() {
//   const list = people.map(x => 
//     (<p key={x.id}> name: {x.name} 
//     <span><input type="button" value="Click" onClick={e => { clickButton(e, x.name) }}
//      ></input></span></p>))
//   return (
//     <>{list}</>
//   );
// }



// Lap4
// const clickButton = (e, name) => {
//   alert(`Input text "${name}`)
// }
// const onChangeFunc = (e) => {
//   // console.log('from is change');
//   // console.log(e.target.value);
// }
// const onKeyPressFunc =(e) => {
//   console.log(e.key);
// }
// function App() {
//   return <>
//   <input type="text" name="password" onChange={onChangeFunc} onKeyPress={onKeyPressFunc}/>
//   <input type="button" value="Click Me" onClick={clickButton}/>
//   </>
// }



//keep onClick ยังไม่เสร็จ
// const people = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Somchai' },
//     { id: 3, name: 'Derp' }
//   ]
// const onClickButton= (e) => {
//   console.log(`Clicked "${name}"`);
// } 
// function App() {
//   const 
//   return <>
//   {}
//   </>
// }



// State
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'John',
//       age: 30,
//       skills: [{ id: 1, name: 'React' },
//       { id: 2, name: 'NodeJS' }]
//     }
//   }
//   render() {
//     return <><p>Name : {this.state.name}</p>
//       <p>Age : {this.state.age}</p>
//       <ul>
//         {this.state.skills.map(skill =>
//           <li key={skill.id}>{skill.name}</li>)}
//       </ul>
//     </>
//   }
// }



// //Test State 2 user
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//     this.state = {
//       user: [
//         {
//           name: 'John',
//           age: 30,
//           skills: [
//             { id: 1, name: 'React' },
//             { id: 2, name: 'NodeJS' },
//           ],
//         },
//         {
//           name: 'Jeffy',
//           age: 28,
//           skills: [
//             { id: 1, name: 'React' },
//             { id: 2, name: 'NodeJS' },
//           ],
//         }
//       ]
//     }
//     onClickFunc = (e) => {
//       console.log("Test");
//       this.setState({ age: 35 });
//     }
//     render() {
//       return <><p>Name : {this.state.name}</p>
//         <p>Age : {this.state.age}</p>
//         <ul>
//           {this.state.skills.map(skill =><li key={skill.id}>{skill.name}</li>)}
//         </ul>
//         <input type="button" value="Click Me" onClick={this.onClickFunc} />
//       </>
//     }
//   }
// }


//set state
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'John',
//       age: 30,
//       skills: [{ id: 1, name: 'React' },
//       { id: 2, name: 'NodeJS' }]
//     }
//   }
//   onChangeAge = () => {
//     this.setState({ age: 20 });
//   }
//   render() {
//     return <><p>Name : {this.state.name}</p>
//       <p>Age : {this.state.age}</p>
//       <ul>
//         {this.state.skills.map(skill =>
//           <li key={skill.id}>{skill.name}</li>)}
//       </ul>
//       <button onClick={this.onChangeAge}>change age</button>
//     </>
//   }
// }


//set state Function
// function App() {
//   const [member, setMember] = useState({
//     name: 'John',
//     age: 30,
//     skills: [{ id: 1, name: 'React' },
//     { id: 2, name: 'NodeJS' }]
//   });

//   const onChangeAge = () => {
//     setMember({ age: 20 });
//   }

//    return <><p>Name : {member.name}</p>
//     <p>Age : {member.age}</p>
//     <ul>
//       {member.skills && member.skills.map(skill =>
//         <li key={skill.id}>{skill.name}</li>)}
//     </ul>
//     <button onClick={onChangeAge}>change age</button>
//   </>
// }




// Test 
function App() {
const [number, setNumber] = useState(10);

const onClickFunc = (e) => {
  console.log("Clicked");
  setNumber(number + 1);
};

  return (
    <>
    <p>{number}</p>
    <input type="button" value="Click" onClick={onClickFunc}/>
    </>
  )
}


export default App;
