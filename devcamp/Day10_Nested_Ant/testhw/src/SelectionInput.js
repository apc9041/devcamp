import { Form, Input, Select } from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    
    span: 5,
  },
  wrapperCol: {
    span: 14,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 5,
    span: 16,
  },
};

const Foreign = () => {
    
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    console.log(value);
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      


      <Form.Item
        name="gender"
        label="Province"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
         
          allowClear
        >

          <Option value="Bangkok">Bangkok</Option>
          <Option value="Phuket">Phuket</Option>
          <Option value="Chiang Mai">Chiang Mai</Option>
          <Option value="Khon Kaen">Khon Kaen</Option>
          <Option value="Chanthaburi">Chanthaburi</Option>
          <Option value="other">..Foreign..</Option>
        </Select>
      </Form.Item>



      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
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

    </Form>
  );
};

export default Foreign;