import "antd/dist/antd.css";
import "../index.css";
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
    Modal, onChange, Space, Cascader,
} from 'antd';
import { DatePicker } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
// import AddFieldFunc from './AddField'
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeLastname, changeAge } from "../profileReducer";


const profile = useSelector((state) => state.profile);
const dispatch = useDispatch();

{/* ------------------------------------------onFinish------------------------------------------------- */ }
// Function OnFinish
const onFinish = async (value) => {
    console.log(value);
    console.log(value.firstname);
    console.log(value.lastname);
    console.log(value.age);

    dispatch(changeName(value.firstname));
    dispatch(changeLastname(value.lastname));
    dispatch(changeAge(value.age));


    {/* ------------------------------------------modal------------------------------------------------- */ }

    Modal.info({
        content: (
            <pre>
                Firstname : {value.firstname}<br />
                lastname : {value.lastname}<br />
                Age : {value.age}<br />
            </pre>
        ),
    });

}
{/* ----------------------------------Item function and customValidate--------------------------------- */ }
const layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 16,
    },
};



const { Option } = Select;


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};

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




{/* ------------------------------------------Form Layout------------------------------------------------- */ }
const FormReg = () => {
    const [form] = Form.useForm();
    return (


        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}>
            {/* ------------------------------------------username------------------------------------------------- */}
            <Form.Item
                name="firstname"
                label="Firstname"
                rules={[
                    {
                        required: true,
                        max: 50,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            {/* ------------------------------------------lastname------------------------------------------------- */}
            <Form.Item
                name="lastname"
                label="Lastname"
                rules={[
                    {
                        required: true,
                        max: 50,
                    },
                ]}
            >
                <Input />
            </Form.Item>
                {/* ------------------------------------------age------------------------------------------------ */}
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

            {/* ------------------------------------------submit------------------------------------------------- */}

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

export default FormReg;