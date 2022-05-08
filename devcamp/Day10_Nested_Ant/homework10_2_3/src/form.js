import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  Checkbox,
  Space,
} from 'antd';
import CheckAccept from './CheckAccept';
import CommentBox from './Comment';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Foreign from './SelectionInput';
import AddFieldFunc from './AddField'
import SubmitModalFunc from './SubmitModal';




const FormReg = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const customValidate = (rule, value) => {
    console.log(value);
    if (value === "test") {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Username Fail"));
    }
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    return (
      () => <Checkbox onChange={onChange}>Checkbox</Checkbox>)
  };


  const RadioGender = () => {
    return (<>
      <Radio.Group name="radiogroup" defaultValue={1}>
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
      </Radio.Group> </>)
  };

  const CheckedAccept = (rule, value) => {
    console.log(value);
    if (onChange = { onChange }) {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Pleae Check"));
    }
  };

  const FieldAge = (rule, value) => {
    if (value < 18){
      return Promise.reject(new Error('Sorry, You are too young')) ;
    }
    else if (value > 60 && value <= 99){
      return Promise.reject(new Error('Sorry, You are too old')) ;
    } 
    else if (value > 99) {
      return Promise.reject(new Error('Error: Maximum number is 99'));
    } else {
      Promise.resolve()
    }
  };


          
          function disabledDate(current) {
            // Can not select days before today and today
            return current && current < moment().endOf("day").subtract(1, "days");
          }


  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="First Name"
        name="input"
        rules={[
          {
            validator: customValidate
          },
        ]}>
        <Input maxLength={50} />
      </Form.Item>

      <Form.Item
        label="Age"
        name="inputnumber"
        rules={[
          {
            validator: FieldAge
          },
        ]}>
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Gender"
        valuePropName="checked"
        name="gender">
        <RadioGender />
      </Form.Item>


      <Form.Item         
      wrapperCol={{
          offset: 1,
          span: 14,
        }}><Foreign/></Form.Item>
      
      

      <Form.Item
        name={['user', 'datePicker']} label="Member Period">
        <Space direction="vertical" size={12} />
        <DatePicker
          format="YYYY-MM-DD"
          // maxDate={addDays(new Date(), 5)}
          minDate={new Date()}
          disabledDate={ disabledDate}
        />
      </Form.Item>

      <Form.Item
      label="Skills"
      name="Skills"
      wrapperCol={{
        offset: 0,
        span: 14,
      }}>
        <AddFieldFunc/>
      </Form.Item>

      <Form.Item label="Hobby">
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


      <Form.Item label="About Me"
        name="Comment"
        style={{ textAlign: 'center' }}
        wrapperCol={{
          offset: 0,
          span: 14,
        }}>
        <CommentBox />
      </Form.Item>


      <Form.Item label=""
        name="CheckBox"
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
        <CheckAccept onChange={onChange} />
      </Form.Item>

      {/* <Form.Item label=""
        wrapperCol={{
          offset: 9,
        }}>
        <Button type="primary" >Submit</Button>
      </Form.Item> */}



      <Form.Item
      style={{ textAlign: 'center' }}>
        <SubmitModalFunc         
        wrapperCol={{
          offset: 10,
        }}/>
      </Form.Item>





    </Form >
  );
};

export default () => <FormReg />;