import './App.css';
import React from 'react';
import moment from "moment";
import 'antd/dist/antd.css';
import { Input, Select, Layout, Form, Button, layout, wrapperCol, offset, Modal } from 'antd';
import axios from 'axios';
import  { AxiosError } from 'axios'; 
import Login from './component/login';
import { Routes, Route } from 'react-router-dom';
import Profile from './component/profile';
import Register from './component/register';

function App() {
 return (
   <div>
     <Routes>
       <Route path="/" element={<Profile />}></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/profile" element={<Profile />}></Route>
       <Route path="/register" element={<Register />}></Route>
     </Routes>
   </div>
 );
}

export default App;