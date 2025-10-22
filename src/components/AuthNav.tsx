import styles from './AuthNav.module.scss'
import logo from '../assets/Azərpoçt AZ horizontal 1.png'

const AuthNav = () => {
  return (
    <div className={styles.nav}>
        <img src={logo} alt="Azərpoçt logo" />
        <div>
          <p>AZ</p>
          <p>EN</p>
          <p>RU</p>
        </div>
    </div>
  )
}

export default AuthNav