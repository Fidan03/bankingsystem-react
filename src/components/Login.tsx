import logo from '../assets/Azərpoçt AZ horizontal 1.png'
import styles from './Login.module.scss'

const Login = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="Azərpoçt logo" />
        <div>
          <p>AZ</p>
          <p>EN</p>
          <p>RU</p>
        </div>
      </div>
      <p>Şəxsi kabinetə giriş</p>
      <div>
        giriş
      </div>
      <div>
        <p>Gizlilik Siyasəti</p>
        <p>Azərpoçt 2022</p>
      </div>
    </div>
  )
}

export default Login