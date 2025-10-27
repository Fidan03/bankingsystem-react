import React, { useState } from 'react';
import styles from './PasswordCheck.module.scss';
import { Flex, Input, Typography, Button } from 'antd';
const { Title } = Typography;
import AuthNav from './AuthNav';
import AuthFooter from './AuthFooter';
import { useNavigate } from 'react-router-dom';

const PasswordCheck = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (text) => {
    console.log('OTP value:', text);
    setValue(text);
  };

  return (
    <div className={styles.passwordTimerContainer}>
      <AuthNav />

      <div className={styles.passwordTimer}>
        <p className={styles.title}>Yoxlama kodunu təsdiqləyin</p>
        <p className={styles.body}>
          Yoxlama kodu SMS vasitəsilə qeyd olunan telefonunuza göndərildi: +994 *** ** 38
        </p>

        <Flex gap="middle" align="flex-start" vertical>
          <Input.OTP
            length={4}
            onChange={handleChange}
            value={value}
            className={styles.numberField}
          />
        </Flex>

        <p className={styles.timerBody}>
          Kodu yenidən göndər: <span>1:56</span>
        </p>

        <Flex gap="small" wrap>
          <Button
            type="primary"
            className={styles.btn}
            onClick={() => navigate('/homepage')}
            disabled={value.length < 4}
          >
            Giriş
          </Button>
        </Flex>
      </div>

      <AuthFooter />
    </div>
  );
};

export default PasswordCheck;
