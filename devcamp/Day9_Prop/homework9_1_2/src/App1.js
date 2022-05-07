import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import PictureCard from './PictureCard';

function App() {
  let data = [{
    id: 101,
    name: "Tom",
    likecount: 0,
  }, {
    id: 102,
    name: "John",
    likecount: 0,
  }]


  return (
    <>
      {data.map(x => (
        <PictureCard
          key={x.id}
          id={x.id}
          name={x.name}
          likecount={x.likecount} />
      ))}

    </>);
}

export default App;
