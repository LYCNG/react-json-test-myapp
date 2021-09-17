import React from 'react'
import { Form, Input, Upload, Button,  Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
const tailLayout = {
wrapperCol: {
    offset: 8,
    span: 16,
},
};

export default function FormBase() {

    const [form] = Form.useForm();

    const onGenderChange = (value) => {
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
            default:
                return
            }
      };

      const props = {
        // beforeUpload: file => {
        //   if (file.type !== 'image/png') {
        //     message.error(`${file.name} is not a png file`);
        //   }
        //   return file.type === 'image/png'||file.type === 'image/jpeg' ? true : Upload.LIST_IGNORE;
        // },
        onChange: info => {
          console.log("image",info.fileList[0].name);
        },
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
        <div style={{marginTop:"10%"}}>
             <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                    name="note"
                    label="Note"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
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
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
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
                        label="Customize Gender"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                    ) : null
                    }
                </Form.Item>
                <Form.Item 
                    name="image"
                    label="image"
                    rules={[
                    {
                        required: true,
                    },
                    ]}>
                    <Upload {...props} accept="image/*" maxCount={1} >
                        <Button icon={<UploadOutlined />}>Upload png only</Button>
                    </Upload>
                    
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                    Reset
                    </Button>
                    <Button type="link" htmlType="button" onClick={onFill}>
                    Fill form
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
