import { Form, Input, Radio, Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './OPTLogin.module.scss';
import { useState } from 'react';

const OPTLogin = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const onFinish = (values: object) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (e:any) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    
  }


  return (
    <div className={styles.OPTContainer}>
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={styles.form} 
        onChange={handleChange}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Zəhmət olmasa email daxil edin!' }]}
        >
          <Input placeholder="Email" className={styles.input} value={value}/>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Zəhmət olmasa şifrə daxil edin!' }]}
        >
          <Input.Password placeholder="Şifrə" className={styles.input} value={value}/>
        </Form.Item>

        <div className={styles.saveAndPassword}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Radio>Yadda saxla</Radio>
          </Form.Item>
          <p
            className={styles.password}
            onClick={() => navigate('/password-recovery')}
          >
            Şifrəni unutmusunuz?
          </p>
        </div>

        <Form.Item>
          <Flex gap="large" wrap>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.button}
              disabled={!value}
            >
              Giriş
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};

export default OPTLogin;
