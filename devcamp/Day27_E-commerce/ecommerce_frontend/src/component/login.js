import { Button, Form, Input, Space } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import React, { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const onFinish = async (values) => {
    // call backend here
    try {
      const result = await axios.post('http://52.77.238.229:3000/api/auth/token', {
        username: values.username,
        password: values.password,
      });
      localStorage.setItem('token', result.data.token);

      alert(`Hello : ${values.username}`);
      navigate('/TableComp');
    } catch (e) {
      form.setFields([
        {
          name: 'username',
          errors: [e.response.data.error],

        },
        navigate('/register')
      ]);
    }
  };

  return (<>

    <center>
    <td>&nbsp;</td>
      <div className='BoxA'
    //  style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}
    ><h1 style={{ color: 'white' }}>:: Log-in ::</h1>
   
      <div style={{ padding: '30px', color: 'white' }}>
        <Space>
          <Form form={form} onFinish={onFinish} >


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
                <td style={{ width: '100px' }}><p style={{ color: 'white', textAlign: 'right' }}>Username : &nbsp;&nbsp;</p></td>
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
              <tr><td style={{ width: '100px' }}><p style={{ color: 'white', textAlign: 'right' }}>Password : &nbsp;&nbsp;</p>
              </td><td style={{ width: '300px' }}><p><Input.Password /> </p></td></tr>
            </Form.Item>




            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div></div></center>

  </>);
}