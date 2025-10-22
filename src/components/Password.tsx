import { Button, Flex } from 'antd';
import logo from '../assets/Azərpoçt AZ horizontal 1.png'
import styles from './Password.module.scss'
import { Input } from 'antd';

const PasswordRecoveryPage = () => {
  return (
    <div className={styles.PasswordContainer}>

      <div className={styles.nav}>
        <img src={logo} alt="Azərpoçt logo" />
        <div>
          <p>AZ</p>
          <p>EN</p>
          <p>RU</p>
        </div>
      </div>

      <div className={styles.login}>
        <p>Şifrənin bərpası</p>
        <Input placeholder="İstifadəçi adı və ya e-mail" />
          <Flex gap="small" wrap>
            <Button type="primary">Primary Button</Button>
          </Flex>
      </div>

      <div className={styles.footer}>
        <p>Gizlilik Siyasəti</p>
        <p>Azərpoçt 2022</p>
      </div>

    </div>
  )
}

export default PasswordRecoveryPage