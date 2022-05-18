import logo from './logo.svg';
import './App.css';
import React from 'react'

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





   const people = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Somchai' },
    { id: 3, name: 'Derp' }
   ]
   const clickButton = (e, name) => {
    alert(`You click on name "${name}"`)
   }
   function App() {
    const list = people.map(x => (<p key={x.id}> name: {x.name} <span><input type="button" value="Click"
   onClick={e => { clickButton(e, x.name) }}></input></span></p>))
    return (
    <>{list}</>
    );
   }

   export default App;