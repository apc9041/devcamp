import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Form,
  Select,
  Input,
  Checkbox,
  InputNumber,
  Radio,
  Button,

} from "antd";
import { changeName, changeLastname, changeAge } from "../profileReducer";


function Profile() {
    
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const onFinish  = (value)=> {
    
      dispatch(changeName(value.firstname));
      dispatch(changeLastname(value.lastname));
      dispatch(changeAge(value.age))
  
      console.log("Success:", value);
  }



  const onFinishFailed = (error) => {
    console.log("Failed:", error);
  };
  


  return (
    <>
    <div className="display">
        <h1>firstname: {profile.firstname} lastname: {profile.lastname} age: {profile.age}</h1>
    </div>  
    
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="firstname"
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
          },
        ]}
      >
        <Input placeholder="Stephen"/>
      </Form.Item>

      <Form.Item
        label="lastname"
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
          },
        ]}
      >
        <Input placeholder="Strange"/>
      </Form.Item>


      <Form.Item
        label="age"
        name="age"
        rules={[
          {
            required: true,
            message: 'Please input your age!',
          },
        ]}
      >
        <InputNumber placeholder="45"/>
      </Form.Item>


      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    </>
  );
}

export default Profile;