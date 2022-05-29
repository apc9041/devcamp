import { Button, Form, Input, Space, Layout } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [form] = Form.useForm();
    let navigate = useNavigate();
    const onFinish = async (values) => {
  
      try {
        const result = await axios.post('/api/auth/token', {
          username: values.username,
          password: values.password,
        });
        localStorage.setItem('token', result.data.token);
        
        navigate('/profile');
        alert(`Hello : ${values.username}`);
      } catch (e) {
        form.setFields([
          {
            name: 'username',
            errors: [e.response.data.error],
          },
        ]);
      }
    };
  
    return (
      <Form form={form} onFinish={onFinish}
      ><div className='BoxA'>
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <h2 style={{ color: 'white' }}>:: LOGIN ::</h2>
          </div>
          <div>
            <Layout style={{ backgroundColor: '#424242' }}>
  

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

   
              {/* ------submit------------------------------------------------- */}
              <Form.Item
              // wrapperCol={{ ...layout.wrapperCol, offset: 10 }}
              ><div style={{ textAlign: 'center' }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                  >
                    Login
                  </Button></div>
              </Form.Item>
  
            </Layout>
          </div>
  
        </div>
      </Form>);
  }