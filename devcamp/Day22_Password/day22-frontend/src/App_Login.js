import logo from './logo.svg';
import './App.css';
import React from 'react';
import moment from "moment";
import 'antd/dist/antd.css';
import { Input, Select, Layout, Form, Button, layout, wrapperCol, offset, Modal } from 'antd';
import axios from 'axios';
import cors from 'cors';
import  { AxiosError } from 'axios'; 


const { Option } = Select;


function App() {
  const [form] = Form.useForm();
  const onFinish = async (values) => {

    try {
      const result = await axios.post('/api/auth/token', {
        username: values.username,
        password: values.password,
      });
      localStorage.setItem('token', result.data.token);
    } catch (e) {
      form.setFields([
        {
          name: 'username',
          errors: [e.response.data.error],
        },
      ]);
    }
  };
 

  //   console.log('values of form: ', values);
  //   const PostFunc = async () => {
  //     await axios.post('/api/auth/token', {
  //       username: values.username,
  //       password: values.password,
  //     });
  //   };
  //   PostFunc();
  //   console.log('username :' , values.username);
  // };
 

  return (
    <Form form={form} onFinish={onFinish}
    ><div className='BoxA'>
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <h2 style={{ color: 'white' }}>:: LOGIN ::</h2>
        </div>
        <div>
          <Layout style={{ backgroundColor: '#424242' }}>


            {/* ------id_card------------------------------------------------- */}
          {/* <Form.Item
              name="id_card"
              lable="id_card"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '200px' }}><p style={{ color: 'white', textAlign: 'right' }}>ID Card : &nbsp;&nbsp;</p>
              </td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item> */}
            {/* ------Firstname------------------------------------------------- */}
            <Form.Item
              name="username"
              // label="usename"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback
            ><tr>
                <td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Username : &nbsp;&nbsp;</p></td>
                <td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>

            {/* ------Lastname------------------------------------------------- */}
            <Form.Item
              name="password"
              // label="password"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Password : &nbsp;&nbsp;</p>
              </td><td style={{ width: '300px' }}><p><Input.Password /> </p></td></tr>
            </Form.Item>

            {/* ------Phone_number------------------------------------------------- */}
            {/* <Form.Item
              name="phone_number"
              lable="Phone_number">
              <tr><td style={{ width: '300px' }}><p style={{ color: 'white', textAlign: 'right' }}>Phone Number : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item> */}

            {/* ------Email------------------------------------------------- */}
            {/* <Form.Item
              name="email"
              lable="Email"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '200px' }}><p style={{ color: 'white', textAlign: 'right' }}>Email : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item> */}
            {/* ------Employee_Address------------------------------------------------- */}
            {/* <Form.Item
              name="employee_address"
              lable="Employee_Address">
              <tr><td style={{ width: '300px' }}><p style={{ color: 'white', textAlign: 'right' }}>Address : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item> */}
            {/* ------Sub_District------------------------------------------------- */}
            {/* <Form.Item
              name="sub_district"
              lable="Sub_District">
              <tr><td style={{ width: '300px' }}><p style={{ color: 'white', textAlign: 'right' }}>Sub District : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>
            {/* ------District------------------------------------------------- */}
            {/* <Form.Item
              name="district"
              lable="District">
              <tr><td style={{ width: '300px' }}><p style={{ color: 'white', textAlign: 'right' }}>District: &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item> */}
            {/* ------Province------------------------------------------------- */}
            {/* <Form.Item
              name="province"
              lable="Province">
              <tr><td style={{ width: '300px' }}><p style={{ color: 'white', textAlign: 'right' }}>Province : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item> */}
            {/* ------PostCode------------------------------------------------- */}
            {/* <Form.Item
              name="postcode"
              lable="PostCode">
              <tr><td style={{ width: '300px' }}><p style={{ color: 'white', textAlign: 'right' }}>PostCode: &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item> */}

            {/* ------Id_Card_Number------------------------------------------------- */}
            {/* <Form.Item
              name="id_card_number"
              lable="Id_Card_Number">
              <tr><td style={{ width: '300px' }}><p style={{ color: 'white', textAlign: 'right' }}>ID Card Number : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item> */}

            {/* ------submit------------------------------------------------- */}
            <Form.Item
            // wrapperCol={{ ...layout.wrapperCol, offset: 10 }}
            ><div style={{ textAlign: 'center' }}>
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button></div>
            </Form.Item>

          </Layout>
        </div>

      </div>
    </Form>);
}

export default App;
