
import './App.css';
import { Input } from 'antd';
import PageLayout from './component/Layout';
import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, Routes } from 'react-router-dom';
import ProductList from './component/ProductList';
import Cart from './component/Cart';
import Profile from './component/Profile';
import NoMatch from './component/NoMatch';
const { Header, Content, Footer } = Layout;



function App() {
  return (
    <div>
    {/* <Navbar /> */}
    <Routes>
      <Route path='/' element={<PageLayout/>}>
      <Route index element={<ProductList/>}></Route>
      <Route path='/productlist' element={<ProductList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;

