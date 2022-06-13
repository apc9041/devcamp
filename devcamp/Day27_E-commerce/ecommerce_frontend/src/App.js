import logo from './logo.svg';
import './App.css';
import TableComp from './component/Table'
import React, { useState } from 'react';
import Create from './component/NewProduct'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import EditProduct from './component/EditProduct';
import ViewProduct from './component/ViewProduct';
import NewProduct from './component/NewProduct';
import MyTable from './component/ReduxFunc';
import Login from './component/login';
import Register from './component/register';
import Line_liff from './component/oauth2';



function App() {


  return (
    <>
        <div style={{backgroundColor: '#424242'}}>
        {/* <MyTable/> */}
      {/* <h1 style={{color:'white'}}>Car Commerce</h1> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route index element={<Login />} />
          <Route path="/lineliff" element={<Line_liff />} />
          <Route path="/TableComp" element={<TableComp />} />
          <Route path="/Register" element={<Register />} />
          
          <Route path="/Login" element={<Login/>}/>
          <Route path="/NewProduct" element={<NewProduct />} />
          <Route path="EditProduct/:id" element={<EditProduct />} />
          <Route path="ViewProduct" element={<ViewProduct />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        {/* </Route> */}
      </Routes>
      {/* <a href={`/NewProduct/${record.id}`}> */}

       
     {/* </a> */}
    </div> 
    </>
  );
};





export default App;









