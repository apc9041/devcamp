import { Button, Form, Input, Space } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import React, { useNavigate } from 'react-router-dom';
import { Component } from 'react';
import { useEffect, useState } from 'react';

// import Line_liff from './oauth2';


export default function Login() {
  
  // useEffect(async() => {
  //   await liff.init({ liffId: '1657206783-A8xw5LxB' }).catch(err => { throw err });
  //   if (liff.isLoggedIn()) {
  //     let getProfile = await liff.getProfile();
  //     // this.setState({
  //     //   name: getProfile.displayName,
  //     //   userLineID: getProfile.userId,
  //     //   pictureUrl: getProfile.pictureUrl,
  //     // })

  //     if(liff.isLoggedIn=== true)
  //    navigate('/TableComp');
        
      
  //     }
  // })

  const liff = window.liff;
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

  //---------------------------------------------------------------------------------------

function Aaa() {
  // <Line_liff/>
  // componentDidMount = async() => {
  //   await liff.init({ liffId: '1657206783-A8xw5LxB' }).catch(err=>{throw err});
  //   if (liff.isLoggedIn()) {
  //     let getProfile = await liff.getProfile();
  //     this.setState({
  //       name: getProfile.displayName,
  //       userLineID: getProfile.userId,
  //       pictureUrl: getProfile.pictureUrl,
  //     });
  //   }else{
  //     liff.login();
  //   }
  // }
}


  //---------------------------------------------------------------------------------------


 
  

  // class Line_liff extends Component {

  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       name: '',
  //       userLineID: '',
  //       pictureUrl: ''
  //     };
  //   }}

    const componentDidMount = async() => {
      await liff.init({ liffId: '1657206783-A8xw5LxB' }).catch(err => { throw err });
      if (liff.isLoggedIn()) {
        let getProfile = await liff.getProfile();
        this.setState({
          name: getProfile.displayName,
          userLineID: getProfile.userId,
          pictureUrl: getProfile.pictureUrl,
        });
        await navigate('/TableComp');
      // } else {
      //   liff.login();
      //   await navigate('/TableComp');
      // }
      // await navigate('/TableComp');
    }

  


  //---------------------------------------------------------------------------------------

  return (<>

    <center>
      <div style={{width:'600px', textAlign:'right', padding:'10px 0px 0px 10px' }}>
        <button class="button-71" onClick={componentDidMount}>
          {"Log-in with Line"}
        </button>
      </div>

      <td>&nbsp;</td>
      <div className='BoxA'
      //  style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}
      ><h1 style={{ color: 'white', padding: '10px' }}>:: Log-in ::</h1>

        <div style={{ padding: '10px', color: 'white' }}>
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
        </div></div>

    </center>





  </>);
}}
