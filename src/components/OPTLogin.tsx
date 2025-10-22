import { FaRegEyeSlash } from "react-icons/fa";
import styles from './OPTLogin.module.scss';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Radio, Button, Flex } from 'antd';
import { useNavigate } from "react-router-dom";

const OPTLogin = () => {
  let navigate = useNavigate();

  return (
    <div className={styles.OPTContainer}>
      <div className={styles.mail}>
        <Input placeholder="Email" className={styles.input}/>
        <Space direction="vertical" >
          <Input.Password placeholder="Input password" className={styles.input}/>
        </Space>
      </div>

      <div className={styles.saveAndPassword}>
        <Radio>Yadda saxla</Radio>
        <p className={styles.password} onClick={() => navigate("/password-recovery")}>Şifrəni unutmusunuz?</p>
      </div>

      <Flex gap="large" wrap>
        <Button type="primary" className={styles.button}>Giriş</Button>
      </Flex>
    </div>
  );
}

export default OPTLogin;
