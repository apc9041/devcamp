
import './App.css';
import Warehouse from './component/warehouse';
import Dashboard from './component/dashboard';
import Stock from './component/stock';
import HomeComp from './component/homeComp';
import AuthContext from './component/authContext';
import NotAllow from './component/stock2';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

const token = localStorage.getItem('token') || null

function App() {
  return (
    <div>
      <AuthContext.Provider value = {token} >
        <Routes>         
            <Route index element={<HomeComp />} />        
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/stock-notallow" element={<NotAllow />} />
            <Route path="/warehouse" element={<Warehouse />} />
        </Routes>
      </AuthContext.Provider>

      <hr />
    </div>
  );
}

function NoMatch() {
  return (
    <><h2>Nothing to see here!</h2><p><Link to="/">Go to the home page</Link></p></>
  );
}



export default App;