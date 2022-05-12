import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, InputNumber, Button } from 'antd';
import { Radio } from 'antd';
import { Select } from 'antd';
import { DatePicker, Space} from 'antd';
import { Checkbox } from 'antd';
import { Rate } from 'antd';
import { Slider, Switch } from 'antd';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Mentions } from 'antd';
import moment from 'moment';



/*    Mentions    */
const { Optio } = Mentions;

const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};

class Mentions_Form extends React.Component {
  state = {
    prefix: '@',
  };

  onSearch = (_, prefix) => {
    this.setState({ prefix });
  };

  render() {
    const { prefix } = this.state;

    return (
      <Mentions
        style={{ width: '100%' }}
        placeholder="input @ to mention people, # to mention tag"
        prefix={['@', '#']}
        onSearch={this.onSearch}
      >
        {(MOCK_DATA[prefix] || []).map(value => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Mentions>
    );
  }
}


/*    UploadOutlined    */

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


/*     Slider     */

class Slider_Form extends React.Component {
    state = {
      disabled: false,
    };
  
    handleDisabledChange = disabled => {
      this.setState({ disabled });
    };
  
    render() {
      const { disabled } = this.state;
      return (
        <>
          <Slider disabled={disabled} />
          <Slider range  disabled={disabled} />
          Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
        </>
      );
    }
  }


/*    Checkbox    */

function onChange_Checkbox(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  
  const plainOptions = ['Apple', 'Pear', 'Orange'];


/*    DatePicker    */

function onChange_date (date, dateString) {
  console.log(date, dateString);
}


/*   Option Select  */

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log('search:', val);
}


/*   layout   */

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};








  const validateMessages = {
      required: '${label} is required!',

      types: {
        text: '${label} must be between ${min} and ${max}',
      },
        number: {
          range: '${label} You are younger ${min} or You are older ${max}',
      },
    };


      /*Function Input_Form */
      const Input_Form = () => {
        const onFinish = (values) => {
          console.log(values);

          
        };

        /*  Validate  */

     
        const customNameValidation = (rule, value) => {
          return value.length < 50 ? Promise.resolve() : Promise.reject(new Error('Error: Maximum number of words you type is 50 words.'));
        }

      

        const customAgeRangValidation = (rule, value) => {
          if (value < 18){
            return Promise.reject(new Error('คุณอายุน้อยเกินไป')) ;
          }
          else if (value > 80 && value <= 99){
            return Promise.reject(new Error('คุณแก่เกินไป')) ;
          } 
          else if (value > 99) {
            return Promise.reject(new Error('Error: Maximum number of words you type is 99 words.'));
          } else {
            Promise.resolve()
          }
        };



        //let myDate = Moment().format('MMMM Do YYYY, h:mm:ss a');
        function disabledDate(current) {
          // Can not select days before today and today
          return current && current < moment().endOf("day").subtract(1, "days");
        }
        

        return (<>
          <Form {...layout} name="nest-messages" onFinish={onFinish} /*onSubmit={handleSubmit}*/ validateMessages={validateMessages} className="input-form">
      

           <div className="input-name">
           <Form.Item

              name={['user', 'name']}
              label="First Name"
              rules ={[
                {
                  required: true,
                },{
                  validator: customNameValidation
                }
              ]}
            >
          
              <Input /*value={formValues.FirstName} onChange={handleChange}*//>
            </Form.Item>
           </div>
           

           <div>
              <Form.Item
                name={['user', 'age']}
                label="Age"
                rules={[
                  {
                    required: true,
                  },{
                    validator: customAgeRangValidation
                  },
                  
                ]}
              >
                <InputNumber /*value={formValues.Age} onChange={handleChange}*//>
              </Form.Item>
           </div>


            <div className="Radio-Group">
                <Radio.Group style={{marginBottom: '20px'}} >
                    <Radio value={1}>Male</Radio>
                    <Radio value={2}>Female</Radio>
                </Radio.Group>
            </div>


            <div className="Select-Province">
                <Select
                    showSearch
                    placeholder="Select a Province"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }>
                    <Option value="“Bangkok”">Bangkok</Option>
                    <Option value="Phetchabun">Phetchabun</Option>
                    <Option value="Mae Hong Son">Mae Hong Son</Option>
                    <Option value="Khon Kaen">Khon Kaen</Option>
                    <Option value="Chaiyaphum">Chaiyaphum</Option>
                </Select>
            </div>
            
            
            <div className="Select-date">
              <Form.Item name="memberperiod">
                <DatePicker format="MMMM Do YYY" disabledDate={disabledDate}  />
              </Form.Item>
            </div>


            <div className="Checkbox-Group">
                <Checkbox.Group options={plainOptions}  onChange={onChange_Checkbox} />
            </div>
          

            <div style={{backgroundColor: 'white', borderRadius: '5px'}} className="Rate">
                <Rate />
            </div>

            <div className="Slider_Form">
                <Slider_Form />
            </div>


            <div className="Upload-form">
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </div>

            
            <div className="Mentions-form">
                <Mentions_Form />
            </div>


            <div className="Button-form">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
            </div>


          </Form>
          </>
        );
      };


export default Input_Form;