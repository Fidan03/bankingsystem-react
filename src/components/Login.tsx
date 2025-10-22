import styles from './Login.module.scss'
import LoginTabs from './LoginTabs'
// import LoginSlider from './LoginSlider'
import AuthNav from './AuthNav'
import AuthFooter from './AuthFooter'

const Login = () => {

  return (
    <div className={styles.loginContainer}>

      <div>
        <AuthNav/>
      </div>

      <div className={styles.login}>
        <p>Şəxsi kabinetə giriş</p>
        <div>
          <LoginTabs/>
        </div>
      </div>

      <div>
        <AuthFooter/>
      </div>

      {/* <LoginSlider/> */}
    </div>
  )
}

export default Login