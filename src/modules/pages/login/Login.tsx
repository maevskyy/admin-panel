import { Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';
import './style.css';

export const Login = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return (
        <div className="login-container">
            <Form
                name="login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <h1 style={{ color: '#00C896', textAlign: 'center' }}>Crypto ahahah</h1>

                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                        style={{ backgroundColor: '#1A2734', color: '#E0E0E0', padding: '.7em' }}
                        className="custom-input"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Password"
                        visibilityToggle={true}
                        style={{ backgroundColor: '#1A2734', color: '#E0E0E0', padding: '.7em' }}
                        className="custom-input"
                    />
                </Form.Item>

                <div className="form-actions">
                    <Form.Item name="remember" valuePropName="checked" className='custom-form-checkbox'>
                        <Checkbox style={{ color: '#E0E0E0' }}>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item className='custom-form-item'>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            style={{
                                // backgroundColor: '#00C896'
                                // backgroundColor: '#15BFFD',
                                backgroundColor: '#15BFFD   ',
                                borderColor: '#00C896',
                                color: '#FFFFFF',
                            }}
                            icon={<LoginOutlined />}
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};
