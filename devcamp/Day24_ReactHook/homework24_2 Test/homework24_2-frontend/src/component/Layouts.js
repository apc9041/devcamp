import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Footer } = Layout;



function Navbar() {
    
    return (<>
    <div><nav className="layout-navigationut">
        <ul><p>
            <li><Link to='/'>Dashboard :</Link></li>
            <li><Link to='/StockManagement'>: Stock Management :</Link></li>
            <li><Link to='/WarehouseManagement'>: Warehouse</Link></li>
            </p></ul>
    </nav>
    </div>
    </>)
}

const Layouts = () => (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark">
      <Navbar/>
      </Menu>
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        
        <Outlet/>

      </Breadcrumb>

    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);
export default Layouts;