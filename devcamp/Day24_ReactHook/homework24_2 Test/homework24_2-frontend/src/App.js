
import './App.css';
import './index.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import StockManagement from './component/StockManagement';
import WarehouseManagement from './component/WarehouseManagement';
import {Routes, Route } from 'react-router-dom';
import React from 'react';
import CurrencyContext from './authContext.js';
import Navbar from './component/Navbar';
import 'antd/dist/antd.css';
import axios from 'axios';
import Layouts from './component/Layouts';
import { Link } from 'react-router-dom';

// const token = localStorage.getItem("mytoken") ? null : null;

const App = () => {
  return (
  <>
  {/* <CurrencyContext.Provider value={token}> */}
    {/* <Navbar/> */}
    {/* <Login/> */}
    {/* <Layouts/> */}

    <Routes>
       <Route path="/" element={<Layouts />}>
      <Route index element={<Dashboard/>}/>
       <Route path="/Dashboard" element={<Dashboard />}/>
       <Route path="/StockManagement" element={<StockManagement />}/>
       <Route path="/WarehouseManagement" element={<WarehouseManagement />}/>
       </Route>
    </Routes>
    {/* </CurrencyContext.Provider> */}
    </>
     );
}

export default App;

//------------------------------------------------------------------------------------------

// import React from 'react';
// import 'antd/dist/antd.css';
// import './index.css';
// import { Layout, Menu, Breadcrumb } from 'antd';
// const { Header, Content, Footer } = Layout;

// const App = () => (
//   <Layout className="layout">
//     <Header>
//       <div className="logo" />
//       <Menu
//         theme="dark"
//         mode="horizontal"
//         defaultSelectedKeys={['2']}
//         items={new Array(15).fill(null).map((_, index) => {
//           const key = index + 1;
//           return {
//             key,
//             label: `nav ${key}`,
//           };
//         })}
//       />
//     </Header>
//     <Content
//       style={{
//         padding: '0 50px',
//       }}
//     >
//       <Breadcrumb
//         style={{
//           margin: '16px 0',
//         }}
//       >
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>List</Breadcrumb.Item>
//         <Breadcrumb.Item>App</Breadcrumb.Item>
//       </Breadcrumb>
//       <div className="site-layout-content">Content</div>
//     </Content>
//     <Footer
//       style={{
//         textAlign: 'center',
//       }}
//     >
//       Ant Design ©2018 Created by Ant UED
//     </Footer>
//   </Layout>
// );

// export default App;