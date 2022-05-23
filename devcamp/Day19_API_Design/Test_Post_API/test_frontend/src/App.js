import logo from './logo.svg';
import './App.css';
import React from 'react';
import moment from "moment";
import 'antd/dist/antd.css';
import { Input, Select, Layout, Form, Button, layout, wrapperCol, offset, Modal } from 'antd';
import axios from 'axios';
import { AxiosError } from 'axios';

const { Option } = Select;


function App() {
  const [form2] = Form.useForm();
  const onFinish = (values) => {
    console.log('values of form: ', values);

    const PostFunc = async () => {
      await axios.post('http://localhost:3000/users/add', {
        id_card: values.id_card,
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        phone: values.phone,
        address: values.address,
        subdistrict: values.subdistrict,
        district: values.district,
        province: values.province,
        postcode: values.postcode,
      });
      await axios.post("http://localhost:3000/users/company", {
        id_number: values.id_number,
        company_name: values.company_name,         
        company_address: values.company_address,
        work_experience: values.work_experience, 
        position: values.position,
        
      });
    };


    PostFunc();

    console.log('id :', values.id_card);
  };


  return (
    <Form form={form2} onFinish={onFinish}
    ><div className='BoxA'>
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <h2 style={{ color: 'white' }}>Register Form</h2>
        </div>
        <div>
          <Layout style={{ backgroundColor: '#424242' }}>


            {/* ------id_card------------------------------------------------- */}
            <Form.Item
              name="id_card"
              lable="id_card"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>ID Card : &nbsp;&nbsp;</p>
              </td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>
            {/* ------Firstname------------------------------------------------- */}
            <Form.Item
              name="firstname"
              lable="Firstname"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback
            ><tr>
                <td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Firstname : &nbsp;&nbsp;</p></td>
                <td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>

            {/* ------Lastname------------------------------------------------- */}
            <Form.Item
              name="lastname"
              lable="lastname"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Lastname : &nbsp;&nbsp;</p>
              </td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>

            {/* ------Email------------------------------------------------- */}
            <Form.Item
              name="email"
              lable="Email"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Email : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>

            {/* ------Phone_number------------------------------------------------- */}
            <Form.Item
              name="phone"
              lable="Phone"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Phone Number : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>

            {/* ------Address------------------------------------------------- */}
            <Form.Item
              name="address"
              lable="Address"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Address : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>
            {/* ------Sub_District------------------------------------------------- */}
            <Form.Item
              name="subdistrict"
              lable="SubDistrict"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Sub District : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>
            {/* ------District-------------------------------------------------*/}
            <Form.Item
              name="district"
              lable="District"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>District: &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>
            {/* ------Province------------------------------------------------- */}
            <Form.Item
              name="province"
              lable="Province"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Province : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>
            {/* ------PostCode------------------------------------------------- */}
            <Form.Item
              name="postcode"
              lable="PostCode"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>PostCode: &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>

      {/* ------ID number------------------------------------------------- */}
      <Form.Item
              name="id_number"
              // lable="PostCode"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback>
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>ID Number: &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>

            {/* ------company_name------------------------------------------------- */}

            <Form.Item
              name="company_name"
              // label="Company Name"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback
            >
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Company Name : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>

            {/* -----company_address------------------------------------------------- */}
            <Form.Item
              name="company_address"
              // label="Company Address"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback
            >
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Company Address : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>


            {/* -----work_experience------------------------------------------------- */}
            <Form.Item
              name="work_experience"
              // label="Work Experience"
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback
            >
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Work Experience : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>


            {/* -----position------------------------------------------------- */}
            <Form.Item
              name="position"
              // ""label="Position"""
              rules={[
                {
                  required: true,
                },
              ]}
              hasFeedback
            >
              <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Position : &nbsp;&nbsp;
              </p></td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
            </Form.Item>


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
