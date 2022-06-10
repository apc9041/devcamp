import { Button, Form, Input, Space, Layout } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const onFinish = async (values) => {

    console.log('values of form: ', values);
    const PostFunc = async () => {
      await axios.post('http://localhost:3000/api/users/register', {
        username: values.username,
        password: values.password,
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
      });
    };
    PostFunc();
    alert("Thank you for submitting the form!")
    console.log('username :', values.username);
    navigate('/login');
  };



return (
  <Form form={form} onFinish={onFinish}
  ><div className='BoxB'>
      <div style={{ padding: '30px', textAlign: 'center' }}>
        <h2 style={{ color: 'white' }}>:: Register ::</h2>
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

          {/* ------firstname------------------------------------------------- */}
          <Form.Item
            name="firstname"
            // label="password"
            rules={[
              {
                required: true,
              },
            ]}
            hasFeedback>
            <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Firstname : &nbsp;&nbsp;</p>
            </td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
          </Form.Item>

          {/* ------Lastname------------------------------------------------- */}
          <Form.Item
            name="lastname"
            // label="password"
            rules={[
              {
                required: true,
              },
            ]}
            hasFeedback>
            <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Lastname : &nbsp;&nbsp;</p>
            </td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
          </Form.Item>

          {/* ------email------------------------------------------------- */}
          <Form.Item
            name="email"
            // label="password"
            rules={[
              {
                required: true,
              },
            ]}
            hasFeedback>
            <tr><td style={{ width: '250px' }}><p style={{ color: 'white', textAlign: 'right' }}>Email : &nbsp;&nbsp;</p>
            </td><td style={{ width: '300px' }}><p><Input /> </p></td></tr>
          </Form.Item>
          {/* ------submit------------------------------------------------- */}
          <Form.Item
          // wrapperCol={{ ...layout.wrapperCol, offset: 10 }}
          ><div style={{ textAlign: 'center' }}>
              <Button
                type="primary"
                htmlType="submit"
              >
                Register
              </Button></div>
          </Form.Item>

        </Layout>
      </div>

    </div>
  </Form>);
  }