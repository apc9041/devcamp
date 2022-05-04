import React from 'react';
import './App.css';

function App() {
  const msg = 'Hello world!'
  const arr = ['arr1', 'arr2', 'arr3']

  const a = true
  return (
    <div>
      <p>Javascript Expression in JSX</p>
      <div>
      {msg},{arr}
      </div>

      <div>
        {a ? 'Yes! It works!' : 'No! It not works!'}
      </div>
      <Exfunction />
      <Text />  
    </div>
    
  );
}

class Exfunction extends React.Component {
  render () {
      return <div className='Exfunction'><h1>Hello React!</h1></div>
  }
}

function Text() {
  return (
    <h1 className='Text'>Hello world!</h1>
  );
}

export default App;