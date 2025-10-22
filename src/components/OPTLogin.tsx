import { Form, Input, Radio, Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './OPTLogin.module.scss';

const OPTLogin = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.OPTContainer}>
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={styles.form}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Zəhmət olmasa email daxil edin!' }]}
        >
          <Input placeholder="Email" className={styles.input} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Zəhmət olmasa şifrə daxil edin!' }]}
        >
          <Input.Password placeholder="Şifrə" className={styles.input} />
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
