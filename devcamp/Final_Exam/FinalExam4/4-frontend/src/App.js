import logo from './logo.svg';
import './App.css';
import TableComp from './component/TableComp'
import React, { useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Afghanistan from './component/Afghanistan'
import Albania from './component/Albania';
import Country from './component/Country';



function App() {


  return (
    <>
        <div>
      {/* <h1 style={{color:'white'}}>Car Commerce</h1> */}
      <Routes>
        <Route path="/" element={<TableComp/>}/>
          <Route index element={<TableComp />} />
          <Route path="/:country" element={<Country />} />
          {/* <Route path="*" element={<NoMatch />} />
        {/* </Route> */}
      </Routes>
      {/* <a href={`/NewProduct/${record.id}`}> */}

       
     {/* </a> */}
    </div> 
    </>
  );
};

export default App;
