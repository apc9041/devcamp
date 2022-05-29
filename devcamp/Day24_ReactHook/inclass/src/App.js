
import './App.css';
import React, { useReducer, useRef, useState, createContext, useContext } from 'react'


//--------------------------------------useState---------------------------------------
// function App() {
//   const [state, setState] = useState('initialState');

//   const onSetStatefunc = (data) => {
//     console.log(data);
//     return data+"1"
//   }

//   return <>
//   <p>{state}</p>
//   <input  type="button" 
//           value="click" 
//           onClick={() => setState(onSetStatefunc)} /></>
// }

//--------------------------------------useState----------------------------------------
// function App() {
//   return <Data value="2" />
// }

// function Data(props) {
//   const calculation = (data) => {
//     return data * 2 + 10
//   }

//   const [state, setState] = useState(() => {
//     const initialValue = calculation(props.value)
//     return initialValue
//   });

//   return <><p>{state}</p></>
// }
//--------------------------------------useEffect--------------------------------------
// function App() {
//   const [header, setHeader] = useState('This is HEADER');
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     console.log('onetime useEffect')
//   }, []);

//   useEffect(() => {
//     console.log('Multi useEffect', counter)
//   }, [counter]);

//   return <>
//   <h1>{header}</h1>
//   <h3>count : {counter}</h3>
//   <input 
//   type="button" 
//   value="ADD COUNT" 
//   onClick={() => setCounter(() => counter + 1)} /></>
// }
//--------------------------------------useEffect--------------------------------------
// function App() {
//   const header = "This is HEADER";
//   const [counter, setCounter] = useState(0);
//   const [counter2, setCounter2] = useState(0);

//   useEffect(() => {
//     console.log("onetime useEffect");
//   }, []);

//   useEffect(() => {
//     console.log("Multi useEffect", counter);
//   }, [counter]);

//   return (
//     <>
//       <h1>{header}</h1>
//       <h3>
//         count1 : {counter} | count2 : {counter2}
//       </h3>
//       <input
//         type="button"
//         value="ADD COUNT1"
//         onClick={() => setCounter(counter + 1)}
//       />
//       <input
//         type="button"
//         value="ADD COUNT2"
//         onClick={() => setCounter2(counter2 + 1)}
//       />
//     </>
//   );
//   }

//--------------------------------------useEffect--------------------------------------
//   function App() {
//     const carsListSpecs = [
//       {
//         id: "001",
//         Name: "chevrolet chevelle malibu",
//         Miles_per_Gallon: 18,
//         Cylinders: 8,
//         Displacement: 307,
//         Horsepower: 130,
//         Weight_in_lbs: 3504,
//         Acceleration: 12,
//         Year: "1970-01-01",
//         Origin: "USA",
//       },
//       {
//         id: "002",
//         Name: "buick skylark 320",
//         Miles_per_Gallon: 15,
//         Cylinders: 8,
//         Displacement: 350,
//         Horsepower: 165,
//         Weight_in_lbs: 3693,
//         Acceleration: 11.5,
//       Year: "1970-01-01",
//       Origin: "USA",
//     },
//     {
//       id: "003",
//       Name: "plymouth satellite",
//       Miles_per_Gallon: 18,
//       Cylinders: 8,
//       Displacement: 318,
//       Horsepower: 150,
//       Weight_in_lbs: 3436,
//       Acceleration: 11,
//       Year: "1970-01-01",
//       Origin: "USA",
//     },
//     {
//       id: "004",
//       Name: "amc rebel sst",
//       Miles_per_Gallon: 16,
//       Cylinders: 8,
//       Displacement: 304,
//       Horsepower: 150,
//       Weight_in_lbs: 3433,
//       Acceleration: 12,
//       Year: "1970-01-01",
//       Origin: "USA",
//     },
//   ];

//   const [currentCar, setCurrentCar] = useState();
//   const [carDetail, setCarDetail] = useState();

//   useEffect(() => {
//     let getCarDetail = carsListSpecs.find((x) => x.id === currentCar);
//     setCarDetail(getCarDetail);
//   }, [currentCar]);

//   return (
//     <>
//       <h1>Select CAR</h1>
//       <select onChange={(e) => setCurrentCar(e.target.value)} defaultValue={""}>
//       <option value="" disabled>
//           Select Your Car
//         </option>
//         <option value="001">Volvo</option>
//         <option value="002">Saab</option>
//         <option value="003">Mercedes</option>
//         <option value="004">Audi</option>
//       </select>
//       <hr />
//       <h3>CAR DETAIL</h3>
//       <p>{JSON.stringify(carDetail)}</p>
//     </>
//   );
// }


//--------------------------------------useContext--------------------------------------
// let ProfileContext = createContext();

// function ProfileContextProvider(props) {

//   let [firstname, setFirstName] = useState('Steve');
//   let [lastname, setLastname] = useState('Roger');
//   let setName = (firstname, lastname) => { setFirstName(firstname); setLastname(lastname) };
 
//  return <ProfileContext.Provider value={{ firstname, lastname, setName }}>
//           {props.children}
//         </ProfileContext.Provider>;
// }

// function InformationPage() {
//   let profile = useContext(ProfileContext);
//   return <>
//   <h1>Profile</h1>
//   <h3>First Name: {profile.firstname}</h3>
//   <h3>Last Name: {profile.lastname}</h3>
//   </>
// }
// function ChangeValuePage() {
//   let profile = useContext(ProfileContext);
//   return <input type='button' value='Set Ironman' onClick={() => profile.setName('Tony', 'Stark')} />
// }

// function App() {
//   return (
//     <ProfileContextProvider>
//       <InformationPage />
//       <ChangeValuePage />
//     </ProfileContextProvider>
//   );
// }
//--------------------------------------useRef--------------------------------------
// function App() {
//   const mutable = useRef('start');
//   const formRef = useRef();

//   const [name, setName] = useState("Initial Name");

//   const onClickFunc = () => {
//     console.log(mutable);
//     console.log(mutable.current);
//     console.log(formRef.current.value);

//     mutable.current = formRef.current.value;
//     formRef.current.focus();
//     setName(formRef.current.value);
//   };

//   return (
//     <>
//       <h1>{name} {mutable.current}</h1>
//       <input type="text" ref={formRef} />
//       <input type="button" value="click" onClick={onClickFunc} />
//     </>
//   );
// }

//----------------------------------------useReducer-------------------------------------------

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     case 'multiply':
//       return { count: state.count * 2 };
//     case 'divide':
//       return { count: state.count / 2 };
//   }
// }
// function Counter() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <>
//       <h1>Count: {state.count}</h1>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//       <button onClick={() => dispatch({ type: 'multiply' })}>*</button>
//       <button onClick={() => dispatch({ type: 'divide' })}>/</button>
//     </>
//   );
// }
// function App() {
//   return (
//     <Counter />
//   );
// }


//----------------------------------------Create own Hook-------------------------------------------
import useStateObj from './useObject';

function App() {
  let [value, setValue] = useStateObj({ firstname: 'Steve', lastname: 'Roger', age: 50 })
  const onClickFunc = () => {
    setValue({ age: 2000})
  }
  return (
    <><h1>{JSON.stringify(value)}</h1><input type='button' value='Click' onClick={onClickFunc} /></>
  );
}


export default App;
