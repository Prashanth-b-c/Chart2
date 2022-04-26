import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Input, Card, Button, Checkbox } from 'antd';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const Register = () =>{
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const navigate = useNavigate()


   
    const onFinish = (values) => {
        console.log('Success:', values);
        let  formData = values
        localStorage.setItem("formData",JSON.stringify(values))
        console.log("data1",formData)
        // navigate("/login")
        
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


    return(
        <div className="site-card-border-less-wrapper" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%', margin:'2rem', paddingLeft:'60px', paddingRight:'380px'}}>
            <Card title="Register" bordered={false}  style={{ width: 300,  alignContent: "center",border: "2px solid black" }}>
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
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
        Or  <a href="/">login now!</a>
      </Form.Item>
    </Form>
</Card>
        </div>
    )
}

export default Register