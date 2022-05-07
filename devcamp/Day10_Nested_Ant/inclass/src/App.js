import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import ContentComp from './Content';

const { Header, Content, Footer } = Layout;


// Example 1
// function App() {
//   return (<TodoListComp/>)
// }

// function TodoListComp() {
//  return (<><p>Todo List No.1</p>
//  <p>Todo List No.2</p>
//  <p>Todo List No.3</p>
//  <TodoFormComp/></>)
// }

// function TodoFormComp() {
//  return (<input type="text" name="todoForm" />)
// }

// Example 2
// function App() {
//   return (<TodoListComp><TodoFormComp /></TodoListComp>)
// }

// function TodoListComp(props) {
//   return (<><p>Todo List No.1</p>
//     <p>Todo List No.2</p>
//     <p>Todo List No.3</p>
//     {props.children}
//   </>)
// }

// function TodoFormComp() {
//   return (<input type="text" name="todoForm" />)
// }

// Example 3
// function App() {
//   return (<TodoListComp form={TodoFormComp} />)
// }


// function TodoListComp(props) {
//   return (<><p>Todo List No.1</p>
//     <p>Todo List No.2</p>
//     <p>Todo List No.3</p>
//     <props.form/>
//   </>)
// }

// function TodoFormComp() {
//   return (<input type="text" name="todoForm" />)
// }




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
