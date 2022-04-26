import React, { useState } from 'react'
import { Form, Input, Card, Button, Checkbox } from 'antd'
import { useNavigate } from 'react-router-dom';
import '../index.css'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values);
        let data = localStorage.getItem("formData")
        let data2 = JSON.parse(data)
        console.log("data2", data2)
        navigate('dashboard')
        // if (values.username === username && values.password === password){
        //     alert("Login Successful")

        // }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="site-card-border-less-wrapper" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%', margin:'2rem', paddingLeft:'60px', paddingRight:'380px'}}>
            <Card title="Login" bordered={false} style={{ width: 300, alignContent: "center", border: "2px solid black" }}>
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
                        Or  <a href="/register">register now!</a>
                    </Form.Item>
                </Form>


            </Card>

        </div>
    )
}

export default Login


{/* <Form {...layout}>
<Form.Item name='username' label="Name"  value={username} rules={[{ type:"text", required: true }]}>
    <Input />
</Form.Item>
{/* <Form.Item name='email' label="Email" value={email} rules={[{ type: 'email' }]}>
    <Input />
</Form.Item> */}
{/* <Form.Item name='password' label="Password" value={password} rules={[{ type: 'password'}]}>
    <Input />
</Form.Item> */}
{/* <Form.Item name={['user', 'website']} label="Website">
    <Input />
</Form.Item>
<Form.Item name={['user', 'introduction']} label="Introduction">
    <Input.TextArea />
// </Form.Item> */}
// <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
{/* <Button type="primary" htmlType="submit">
        Submit
    </Button>
</Form.Item>
</Form>  */}