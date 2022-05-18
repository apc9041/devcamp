import logo from './logo.svg';
import './App.css';
import React from 'react'

const RenderProps = (props) => {
  return (<>{props.component}</>)
 }
 const Display = (props) => {
  return (
  <div>
  <p>string: {props.myStr}</p>
  <p>number: {props.myNumber}</p>
  <p>false value: {props.myBool.toString()}</p>
  <p>true value: {props.myTrueBool.toString()}</p>
  <p>null: {props.myNull === null && 'yes'}</p>
  <p>undefined: {props.myUndefinded === undefined &&
 'yes'}</p>
  <p>object: {JSON.stringify(props.myObj)}</p>
  <p>array: {JSON.stringify(props.myArray)}</p>
  <p>Date: {props.myDate.toString()}</p>
  <p>function: {props.myShowNameFunc('John')}</p>
  <p>Component:</p>
  <RenderProps component={(<ProfileFuncComp
 firstname="Hollie" lastname="Chang" />)} />
  </div>
  )
 }

 const ProfileFuncComp = (props) => {
  return (<><p>Firstname : {props.firstname}</p>
  <p>Lastname : {props.lastname}</p></>)
 }
 function App() {
  const str = 'hello react!'
  const number = 5
  const bool = false
  const nullValue = null
  const undefinedValue = undefined
  const obj = { name: 'somchai', b: 2 }
  const arr = ['john', 2, 'smith', 4]
  const now = new Date()
  const showNameFunc = (name) => {
  return 'my name is ' + name
  }
  return (
  <Display myStr={str} myNumber={number}
 myBool={bool} myTrueBool myNull={nullValue}
 myUndefinded={undefinedValue} myObj={obj}
 myArray={arr} myDate={now}
 myShowNameFunc={showNameFunc}
  />
  );
 }

export default App;
