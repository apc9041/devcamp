import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const Navbar = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
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
        <Breadcrumb.Item >Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Stock Management</Breadcrumb.Item>
        <Breadcrumb.Item>Warehouse Management</Breadcrumb.Item>
      </Breadcrumb>


      <div className="site-layout-content">Content</div>
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

export default Navbar;