import React from 'react';
import { AuthContextComponent } from './AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextComponent>
            <Routes>
              <Route index element = {<Login />}/>
              <Route path='/Register' element = {<Register/>}/>
            </Routes>
        </AuthContextComponent>
      </BrowserRouter>

    </>
  )
}

export default App;