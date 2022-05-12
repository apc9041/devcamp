
import React, { useState } from 'react';
import "./App.css";

function App() {
  const [text, setText] = useState("Container");

  const changeText = (text) => {
    setText(text);
  };

  return (
    <>
      <h1>{text}</h1>
      <Container changeFunc={changeText} />
    </>
  );
}

function Container(props) {
  const websiteName = "DEVCAMP 2023";
  const callFunc = (e) => {
    props.changeFunc(e.target.value);
  };
  return (
    <>
      {/* <Header sitename={websiteName} menu={<Menu path={pathList} />} /> */}
      <Header sitename={websiteName}>
        <h4>This is Menu</h4>
        <Menu path={pathList}/>
      </Header>
      <input type="text" onChange={callFunc} />
    </>
  );
}

function pathList() {
  return [
    { name: "Google", path: "http://www.google.co.th" },
    { name: "Youtube", path: "http://www.youtube.com" },
    { name: "Yahoo", path: "http://www.yahoo.co.th" },
  ];
}

function Menu(props) {
  return (
    <ul>
      {props.path().map((x) => (
        <li key={x.path}>
          <a href={x.path} target="_blank">
            {x.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Header(props) {
  return (
    <>
      <h3>{props.sitename}</h3>
      {/* <div>{props.menu}</div> */}
      {props.children}
    </>
  );
}

export default App;