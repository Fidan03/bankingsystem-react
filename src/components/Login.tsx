import logo from '../assets/Azərpoçt AZ horizontal 1.png'
import styles from './Login.module.scss'

const Login = () => {
  return (
    <div className={styles.loginContainer}>

      <div className={styles.nav}>
        <img src={logo} alt="Azərpoçt logo" />
        <div>
          <p>AZ</p>
          <p>EN</p>
          <p>RU</p>
        </div>
      </div>

      <div className={styles.login}>
        <p>Şəxsi kabinetə giriş</p>
        <div>
          <p>OTP giriş</p>
          <p>ASAN imza</p>
          <p>SIMA</p>
        </div>

        <div>
          options
        </div>
      </div>

      <div className={styles.footer}>
        <p>Gizlilik Siyasəti</p>
        <p>Azərpoçt 2022</p>
      </div>
    </div>
  )
}

export default Login