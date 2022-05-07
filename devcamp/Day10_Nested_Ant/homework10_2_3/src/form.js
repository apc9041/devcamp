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
  TreeSelect,
  Switch,
  Checkbox,
} from 'antd';
import CheckAccept from './CheckAccept';
import CommentBox from './Comment';
import SelectPv from './SelectPv';
import moment from 'moment';
import 'moment/locale/zh-cn';



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

  const onChange=(e)=>{
    console.log(`checked = ${e.target.checked}`);
  return (
    () => <Checkbox onChange={onChange}>Checkbox</Checkbox>)};


  const RadioGender = () => {
    return ( <>
    <Radio.Group name="radiogroup" defaultValue={1}>
      <Radio value={1}>Male</Radio>
      <Radio value={2}>Female</Radio>
    </Radio.Group> </>)
  };

  const CheckedAccept = (rule, value) => {
    console.log(value);
    if (onChange={onChange}) {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Pleae Check"));
    }
  };





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
      //   rules={{
      //       min: 0,
      //       max: 500
      //  } }
      >
        <InputNumber min={1} max={99} />
      </Form.Item>

      <Form.Item 
      label="Gender" 
      valuePropName="checked"
      name="gender">
        <RadioGender />
      </Form.Item>

      <Form.Item label="" 
        name="Comment"
        style={{textAlign:'center'}}
        wrapperCol={{
          offset: 4,
          span: 14,
        }}>
        <CommentBox />
      </Form.Item>


      <Form.Item 
        label="Province"
        name="select">
        <Select defaultValue={['Bangkok']}>
          <Select.Option value="Bangkok">Bangkok</Select.Option>
          <Select.Option value="Phuket">Phuket</Select.Option>
          <Select.Option value="Chiang Mai">Chiang Mai</Select.Option>
          <Select.Option value="Khon Kaen">Khon Kaen</Select.Option>
          <Select.Option value="Chanthaburi">Chanthaburi</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item 
        label="Member Period"
        name="DatePicker">
        <DatePicker excludeDates={[moment(), moment().subtract(10, "days")]}/>
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
        <CheckAccept  onChange={onChange}/>
      </Form.Item>

      <Form.Item label="" 
      // style={{textAlign:'center'}}
      wrapperCol={{
        offset: 9,
        // span: 15,
      }}>
        <Button type="primary" >Submit</Button>
      </Form.Item>












    </Form >
  );
};

export default () => <FormReg />;