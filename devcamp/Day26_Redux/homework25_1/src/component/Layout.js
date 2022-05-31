import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Outlet, Link } from 'react-router-dom'; 
const { Header, Content, Footer } = Layout;

function NavbarMenu() {
    return(<>
    <nav className="layout-navigationut">
    <ul>
        <li><Link to="/ProductList">ProductList&nbsp;&nbsp;</Link></li>
        <li><Link to="/Profile">Profile&nbsp;&nbsp;</Link></li>
        <li><Link to="/Cart">Cart&nbsp;&nbsp;</Link></li>
    </ul>
</nav>
    </>)
}



const PageLayout = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark">
      <NavbarMenu/>
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

export default PageLayout;