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
    Modal, onChange, Space, Cascader,
} from 'antd';
import { DatePicker } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import AddFieldFunc from './AddField'


{/* ------------------------------------------onFinish------------------------------------------------- */ }
// Function OnFinish
const onFinish = async (values) => {
    console.log(values);
    console.log(values.firstname);
    console.log(values.lastname);
    console.log(values.age);
    console.log(values.email);
    console.log(values.gender);
    console.log(values.province);
    console.log(values.other);
    // console.log(values.user);
    for (let i in values.skillslist) {
        console.log(values.skillslist[i]);
    };
    console.log(values.hobby);
    for (let i in values.hobby) {
        console.log(values.hobby[i]);
    };

    {/* ------------------------------------------modal------------------------------------------------- */ }

    Modal.info({
        content: (
            <pre>
                Firstname : {values.firstname}<br />
                lastname : {values.lastname}<br />
                Age : {values.age}<br />
                Email : {values.email}<br />
                Gender : {values.gender}<br />
                Province : {values.province}<br />
                - Other : {values.other}<br />
                Skills : {`${values.skillslist} , `}<br />
                Hobby : {`${values.hobby} , `}<br />
            </pre>
        ),
    });
}

{/* ----------------------------------Item function and customValidate--------------------------------- */ }
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};

// const onChange = (e) => {
//     console.log(`checked = ${e.target.checked}`);
//     console.log(`${e.target}`)
//     return (
//       () => <Checkbox onChange={onChange}>Checkbox</Checkbox>)
//   };


//   const CheckedAccept = (rule, value) => {
//     // console.log(value);
//     if (value) {
//       return Promise.resolve();
//     } else {
//       return Promise.reject(new Error("Pleae Check"));
//     }
//   };

const CheckedAccept = (rule, value) => {
    // console.log(value);
    if (value) {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Pleae Check"));
    }
  };

function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day").subtract(1, "days");
}

const { Option } = Select;


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
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

{/* ------------------------------------------Layout------------------------------------------------- */ }
const FormComp = () => {
    const [form] = Form.useForm();
    return (
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
        // validateMessages={validateMessages}
        >
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
            {/* ------------------------------------------username2------------------------------------------------- */}
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



            {/* ------------------------------------------email------------------------------------------------- */}

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
                // valuePropName="checked"
                rules={[
                    {
                        // validator: RadioGender,
                        required: true,
                    },
                ]}
            >
                {/* <RadioGender /> */}
                <Radio.Group>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                </Radio.Group>
            </Form.Item>

            {/* ------------------------------------------province------------------------------------------------- */}
            <Form.Item
                name="province"
                label="Province"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Select a option and change input text above"
                // onChange={onGenderChange}
                // allowClear
                >
                    <Option value="Bangkok">Bangkok</Option>
                    <Option value="Phuket">Phuket</Option>
                    <Option value="Chiang Mai">Chiang Mai</Option>
                    <Option value="Khon Kaen">Khon Kaen</Option>
                    <Option value="Chanthaburi">Chanthaburi</Option>
                    <Option value="other">..Foreign..</Option>
                </Select>
            </Form.Item>
            {/* ------------------------------------------other------------------------------------------------- */}
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.province !== currentValues.province}
            >
                {({ getFieldValue }) =>
                    getFieldValue('province') === 'other' ? (
                        <Form.Item
                            name="other"
                            label="Other"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input value=""
                            />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>

            {/* ------------------------------------------datePicker------------------------------------------------- */}
            <Form.Item
                name={['user', 'datePicker']} label="Member Period">
                <Space direction="vertical" size={12} />
                <DatePicker
                    format="YYYY-MM-DD"
                    // maxDate={addDays(new Date(), 5)}
                    minDate={new Date()}
                    disabledDate={disabledDate}
                />
            </Form.Item>
            {/* ------------------------------------------skillslist------------------------------------------------- */}
            <Form.List
                name="skillslist"
                rules={[
                    {
                        validator: async (_, skills_list) => {
                            if (!skills_list || skills_list.length < 2) {
                                return Promise.reject(new Error("At least 2 skills"));
                            }
                        },
                    },
                ]}
            >
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map((field, index) => (
                            <Form.Item
                                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                label={index === 0 ? "Skills" : ""}
                                required={false}
                                key={field.key}
                            >

                                <Form.Item
                                    {...field}
                                    validateTrigger={["onChange", "onBlur"]}
                                    rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "Please input skill.",
                                        },
                                    ]}
                                    noStyle
                                >
                                    <Input
                                        //placeholder="your skill"
                                        style={{ width: "50%" }}
                                    />
                                </Form.Item>
                                {fields.length > 1 ? (
                                    <MinusCircleOutlined
                                        style={{ marginLeft: "30px" }}
                                        className="dynamic-delete-button"
                                        onClick={() => remove(field.name)}
                                    />
                                ) : null}
                            </Form.Item>
                        ))}
                        {/* ------------------------------------------Add skill------------------------------------------------- */}

                        <Form.Item>
                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{ width: "60%" }}
                                    icon={<PlusOutlined />}
                                >
                                    Add skill
                                </Button>
                            </Form.Item>

                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                    </>
                )}
            </Form.List>

            {/* ------------------------------------------Hobby------------------------------------------------- */}

            <Form.Item
                name='hobby' label='Hobby'>
                <Cascader
                    options={[

                        {
                            value: 'Watching Movie',
                            label: 'Watching movie',
                            children: [
                                {
                                    value: 'Action',
                                    label: 'Action',
                                },
                                {
                                    value: 'Drama',
                                    label: 'Drama'
                                },
                                {
                                    value: 'Romantic',
                                    label: 'Romantic',
                                },
                            ],
                        },
                        {
                            value: 'Read a book',
                            label: 'Read a book',
                            children: [
                                {
                                    value: 'Academic',
                                    label: 'Academic',
                                },
                                {
                                    value: 'Novel',
                                    label: 'Novel'
                                },
                                {
                                    value: 'News',
                                    label: 'News',
                                },
                            ],
                        },


                    ]}
                />
            </Form.Item>


            {/* ------------------------------------------CheckBox------------------------------------------------- */}

            <Form.Item label=""
                name="checkbox"
                valuePropName="checked"
                // style={{textAlign:'center'}}
                wrapperCol={{
                    offset: 4,
                    // span: 15,
                }}
                rules={[
                    {
                      validator: CheckedAccept
                    },
                ]}>
                <Checkbox> I agree </Checkbox>
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

export default FormComp;