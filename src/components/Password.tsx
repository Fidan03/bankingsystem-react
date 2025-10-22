import { Button, Flex } from 'antd';
import styles from './Password.module.scss'
import { Input } from 'antd';
import info from '../assets/fi_info.png';
import AuthNav from './AuthNav';
import AuthFooter from './AuthFooter';


const PasswordRecoveryPage = () => {
  return (
    <div className={styles.PasswordContainer}>

      <div>
        <AuthNav/>
      </div>

      <div className={styles.login}>
        <p>Şifrənin bərpası</p>
        <Input placeholder="İstifadəçi adı və ya e-mail" className={styles.input}/>
        <div>
          <img src={info} alt="info" />
          <p>Sizin email ünvanınıza şifrənin bərpasının təsdiqlənməsi barədə məktub göndəriləcək</p>
        </div>
          <Flex gap="small" wrap>
            <Button type="primary" className={styles.button}>Dəvam et</Button>
          </Flex>
      </div>

      <div>
        <AuthFooter/>
      </div>

    </div>
  )
}

export default PasswordRecoveryPage