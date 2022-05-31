import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = function () {
    const [form] = Form.useForm();
    let navigate = useNavigate();
    const onFinish = async (values) => {
        console.log(values);

        try {
            const results = await axios.post('/api/auth/token', {
                username: values.username,
                password: values.password,
            });
            localStorage.setItem('token', results.data.token);
            navigate('/Dashboard');

        } catch (e) {
            console.log(e);
            form.setFields([{
                name: 'username',
                error: [e.response.data.error],
            }]);
        };
    };


    return (
        <center>
            <Form form={form} onFinish={onFinish}>
                <div className='BoxA'>
                    <h1 style={{ color: 'white' }}>:: Login ::</h1><br />
                    <Form.Item name='username'>
                        <tr>
                            <td style={{ width: '100px' }}><p style={{ color: 'white' }}> Username : </p></td>
                            <td style={{ width: '200px' }}><Input /></td>
                        </tr>
                    </Form.Item>

                    <Form.Item name='password'>
                        <tr>
                            <td style={{ width: '100px' }}><p style={{ color: 'white' }}> Password : </p></td>
                            <td style={{ width: '200px' }}><Input type='password' /></td>
                        </tr>

                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit'>submit</Button>
                    </Form.Item>
                </div>
            </Form>
        </center>
    )
}

export default Login;