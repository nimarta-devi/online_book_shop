import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link, useNavigate} from 'react-router-dom';

// link for mysql and node: https://www.youtube.com/watch?v=YYEC7ydDj4k
const LoginForm = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const loginBtnFtn = ()=> 
  {
    //if(username === )
    navigate('/books')
  }
  return (
    <>
      <div style={{ 
        display: 'flex',  justifyContent:'center', alignItems:'center'
      }}> 
        
        <div>
          <br/>
          <h3>To continue, you must login first</h3>
          <br/>
        </div>
      </div>
      <div style={{ 
        display: 'flex',  justifyContent:'center', alignItems:'center'
      }}>
        <Form
          layout="vertical"
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick = {loginBtnFtn} style={{width: '100%'}}>
              Log in
            </Button>

            <br/><br/>
            Or <Link to="/register">register now! </Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;