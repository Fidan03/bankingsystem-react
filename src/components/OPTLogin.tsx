import { FaRegEyeSlash } from "react-icons/fa";
import styles from './OPTLogin.module.scss';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Radio } from 'antd';

const OPTLogin = () => {
  return (
    <div className={styles.OPTContainer}>
      <div className={styles.mail}>
        <Input placeholder="Email" />
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input.Password placeholder="Input password" />
        </Space>
      </div>

      <div className={styles.saveAndPassword}>
        <div className={styles.save}>
          <Radio>Yadda saxla<Radio/>
        </div>
        <p>Şifrəni unutmusunuz?</p>
      </div>

      <button className={styles.login}>Giriş</button>
    </div>
  );
}

export default OPTLogin;
