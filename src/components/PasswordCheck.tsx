import React from 'react'
import styles from './PasswordCheck.module.scss'
import { Flex, Input, Typography, Button } from 'antd';
const { Title } = Typography;
import AuthNav from './AuthNav'
import AuthFooter from './AuthFooter'

const PasswordCheck = () => {

      const onChange = text => {
    console.log('onChange:', text);
  };
  const onInput = value => {
    console.log('onInput:', value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };

  return (
    <div className={styles.passwordTimerContainer}>
        
        <div>
            <AuthNav/>
        </div>

        <div className={styles.passwordTimer}>
            <p className={styles.title}>Yoxlama kodunu təsdiqləyin</p>
            <p className={styles.body}>Yoxlama kodu SMS vasitəsilə qey olunan telefonunuza göndərildi: +994 *** ** 38</p>
            <Flex gap="middle" align="flex-start" vertical>
                <Input.OTP length={4} {...sharedProps} className={styles.numberField}/>
            </Flex>
            <p className={styles.timerBody}>Kodu yeniden göndər: <span>1:56</span></p>

            <Flex gap="small" wrap>
                <Button type="primary">Primary Button</Button>
            </Flex>
        </div>

        <div>
            <AuthFooter/>
        </div>

    </div>
  )
}

export default PasswordCheck