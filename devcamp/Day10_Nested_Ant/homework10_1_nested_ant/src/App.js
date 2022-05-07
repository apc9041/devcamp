import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import ContentComp from './Content';

const { Header, Content, Footer } = Layout;


function App() {
  let menu = ["Home","Portfolio","Contact","About Us"];
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={menu.map((x) => {
            return {
              key: x,
              label: x,
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content"><ContentComp/></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Dev Camp ©2022 Created by Apichart</Footer>
    </Layout>
  );
}


export default App;
