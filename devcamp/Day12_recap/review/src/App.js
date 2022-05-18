import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// const changeForm = (e) => {
//     console.log(e.target.value);
//     console.log(e.target.type, e.target.name);
//    }
//    const blurForm = (e) => {
//     alert(`You out of Focus with Firstname "${e.target.value}"`)
//    }
//    function App() {
//     return (
//     <><p>Firstname</p><input type="text" name="firstname" onBlur={blurForm}
//    onChange={changeForm} /></>
//     );
//    }





//    const people = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Somchai' },
//     { id: 3, name: 'Derp' }
//    ]
//    const clickButton = (e, name) => {
//     alert(`You click on name "${name}"`)
//    }
//    function App() {
//     const list = people.map(x => (<p key={x.id}> name: {x.name} <span><input type="button" value="Click"
//    onClick={e => { clickButton(e, x.name) }}></input></span></p>))
//     return (
//     <>{list}</>
//     );
//    }





//    class App extends React.Component {
//     constructor(props) {
//     super(props)
//     this.state = {
//     name: 'John',
//     age: 30,
//     skills: [{ id: 1, name: 'React' },
//     { id: 2, name: 'NodeJS' }]
//     }
//     }
//     onChangeAge = () => {
//     this.setState({ age: 20, 
//         name: 'Apichart', 
//         skills: [{ id: 1, name: 'Karn' },
//                 { id: 2, name: 'Mint' }] });
//     }
//     render() {
//     return <><p>Name : {this.state.name}</p>
//     <p>Age : {this.state.age}</p>
//     <ul>
//     {this.state.skills.map(skill =>
//     <li key={skill.id}>{skill.name}</li>)}
//     </ul>
//     <button onClick={this.onChangeAge}>change
//    age</button>
//     </>
//     }
//    }



//    function App() {
//     const [member, setMember] = useState({
//     name: 'John',
//     age: 30,
//     skills: [{ id: 1, name: 'React' },
//     { id: 2, name: 'NodeJS' }]
//     });
//     const onChangeAge = () => {
//     setMember({ name: 'PongSak',
//         age: 20,
//         skills: [{ id: 1, name: 'Karn' },
//                 { id: 2, name: 'Mint' }] });
//     }
//     return <><p>Name : {member.name}</p>
//     <p>Age : {member.age}</p>
//     <ul>
//     {member.skills && member.skills.map(skill =>
//     <li key={skill.id}>{skill.name}</li>)}
//     </ul>
//     <button onClick={onChangeAge}>change age</button>
//     </>
//    }


//    function App() {
//     const [member, setMember] = useState({
//     name: 'John',
//     age: 30,
//     skills: [{ id: 1, name: 'React' },
//     { id: 2, name: 'NodeJS' }]
//     });
//     const onChangeAge = () => {
//     setMember({ age: 20 });
//     }
//     return <><p>Name : {member.name}</p>
//     <p>Age : {member.age}</p>
//     <ul>
//     {member.skills && member.skills.map(skill =>
//     <li key={skill.id}>{skill.name}</li>)}
//     </ul>
//     <button onClick={onChangeAge}>change age</button>
//     </>
//    }
   
   function App() {
    const [member, setMember] = useState({
      name: "John",
      age: 30,
      skills: [
        { id: 1, name: "React" },
        { id: 2, name: "NodeJS" },
      ],
    });
  
    const onChangeAge = () => {
      let newValue = { ...member };
      newValue.skills[0].name = 'Apichart';
      newValue.skills[1].name = 'Anusara';
      setMember(newValue);
    };
  
    return (
      <>
        <p>Name : {member.name}</p>
        <p>Age : {member.age}</p>
        <ul>
          {member.skills &&
            member.skills.map((skill) => <li key={skill.id}>{skill.name}</li>)}
        </ul>
        <button onClick={onChangeAge}>change value</button>
      </>
    );
  }
   

   export default App;