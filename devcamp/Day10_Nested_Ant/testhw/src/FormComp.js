import "antd/dist/antd.css";
import "./index.css";
import moment from "moment";
import React from "react";
import {
    Form,
    Select,
    Input,
    InputNumber,
    Radio,
    Button,
    Checkbox,
    Modal, onChange,
} from 'antd';
import { DatePicker } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};


// Function OnFinish
const onFinish = async (values) => {
    console.log(values);
    console.log(values.username);
    console.log(values.username2);
    console.log(values.age);
    console.log(values.email);
    console.log(values.gender);

    Modal.info({
        content: (
            <pre>
                Firstname : {values.username}<br />
                lastname : {values.username2}<br />
                Age : {values.age}<br />
                Email : {values.email}<br />
                Gender : {values.gender}<br />
            </pre>
        ),
    });


}

const customValidate = (rule, value) => {
    console.log(value);
    if (value < 18) {
        return Promise.reject(new Error('Sorry, You are too young'));
    }
    else if (value > 60 && value <= 99) {
        return Promise.reject(new Error('Sorry, You are too old'));
    }
    else if (value > 99) {
        return Promise.reject(new Error('Error: Maximum number is 99'));
    } else {
        return Promise.resolve();
    }
};


const RadioGender = () => {
    const [value, setValue] = React.useState(1);
    const onChange = e => {
      console.log(e.target.value);
      setValue(e.target.value);
    };
    return (
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={'Male'}>Male</Radio>
        <Radio value={'Female'}>Female</Radio>
      </Radio.Group>
    );
  };


// const RadioGender = () => {

//     return (<>
//       <Radio.Group name="radiogroup" 
//       onChange={onChange}
//       >
//         <Radio value={1}>Male</Radio>
//         <Radio value={2}>Female</Radio>
//       </Radio.Group> </>)
//   };


const FormComp = () => {
    const [form] = Form.useForm();
    return (
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
        // validateMessages={validateMessages}
        >
            <Form.Item
                name="username"
                label="Username"
                rules={[
                    {
                        required: true,
                        max: 50,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="username2"
                label="Username2"
                rules={[
                    {
                        required: true,
                        max: 50,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="age"
                label="Age"
                rules={[
                    {
                        type: "number",
                        min: 0,
                        max: 99,
                        validator: customValidate,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>





            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        type: "email",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="gender"
                label="Gender"
                valuePropName="checked"
                rules={[
                    {
                        // validator: RadioGender,
                        required: RadioGender,
                    },
                ]}
            >
                <RadioGender />
                {/* <Radio.Group>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                </Radio.Group> */}
            </Form.Item>



            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Submit
                </Button>
            </Form.Item>










        </Form >)
}

export default FormComp;