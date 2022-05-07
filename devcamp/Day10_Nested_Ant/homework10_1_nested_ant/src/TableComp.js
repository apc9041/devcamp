import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Tag, Space } from 'antd';
// import { Modal, Button } from 'antd';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';


const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};



const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    render: avatar => ( <>
      <Avatar icon={<UserOutlined />} />
      {/* <Avatar>U</Avatar>
      <Avatar size={40}>USER</Avatar>
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar
        src={
          <Image
            src="https://joeschmoe.io/api/v1/random"
            style={{
              width: 32,
            }}
          />
        }
      />
      <Avatar
        style={{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
        }}
      >
        U
      </Avatar>
      <Avatar
        style={{
          backgroundColor: '#87d068',
        }}
        icon={<UserOutlined />}
      /> */}
    </>
    )
  },
  {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Button',
      key: 'button',
      render: button => (<Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>
       
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      Avatar : 'Avatar',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];





  //function
const TableComp = () => {
    return (<><Table columns={columns} dataSource={data} />;
   
          </>)
        
      };


export default TableComp;