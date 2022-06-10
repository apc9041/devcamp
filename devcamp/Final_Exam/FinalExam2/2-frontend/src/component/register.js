
import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register() {
 const [form] = Form.useForm();
 let navigate = useNavigate();
 const onFinish = async (values) => {
     console.log(values);
    const PostFunc = async () => {
        await axios.post('/api/users', {
          username: values.username,
          password: values.password,
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          mobile_phone: values.mobile_phone,
        });
      };
      PostFunc();
      alert("Registered")
      console.log('username :', values.username);
      navigate('/login');
    };
 

 return (<>
 <h1>Register</h1>
   <div
     style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}
   >
     <Space>
       <Form form={form} onFinish={onFinish}>
{/* ---------------------------------------------username------------------------------------------- */}
         <Form.Item
           name="username"
           label="Username"
           labelCol={{ span: 8 }}
           wrapperCol={{ span: 16 }}
           rules={[
             {
               required: true,
             },
           ]}
         >
           <Input />
         </Form.Item>
{/* ---------------------------------------------password------------------------------------------- */}
         <Form.Item
           name="password"
           label="Password"
           labelCol={{ span: 8 }}
           wrapperCol={{ span: 16 }}
           rules={[
             {
               required: true,
             },
           ]}
         >
           <Input.Password />
         </Form.Item>
         {/* ---------------------------------------------firstname------------------------------------------- */}
         <Form.Item
           name="firstname"
           label="Firstname"
           labelCol={{ span: 8 }}
           wrapperCol={{ span: 16 }}
           rules={[
             {
               required: true,
             },
           ]}
         >
           <Input />
         </Form.Item>
         {/* ---------------------------------------------lastname------------------------------------------- */}
         <Form.Item
           name="lastname"
           label="Lastname"
           labelCol={{ span: 8 }}
           wrapperCol={{ span: 16 }}
           rules={[
             {
               required: true,
             },
           ]}
         >
           <Input />
         </Form.Item>
         {/* ---------------------------------------------email------------------------------------------- */}
         <Form.Item
           name="email"
           label="Email"
           labelCol={{ span: 8 }}
           wrapperCol={{ span: 16 }}
           rules={[
             {
               required: true,
             },
           ]}
         >
           <Input />
         </Form.Item>
         {/* ---------------------------------------------mobile_phone------------------------------------------- */}
         <Form.Item
           name="mobile_phone"
           label="Mobile Phone"
           labelCol={{ span: 8 }}
           wrapperCol={{ span: 16 }}
           rules={[
             {
               required: true,
             },
           ]}
         >
           <Input />
         </Form.Item>
{/* ---------------------------------------------submit------------------------------------------- */}
         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
           <Button type="primary" htmlType="submit">
             Submit
           </Button>
         </Form.Item>
       </Form>
     </Space>
   </div>
   </> );
}
