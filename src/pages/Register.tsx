import Login from '../components/Login'
import Welcome from '../components/Welcome'
import styles from './register.module.scss'

const Register = () => {
  return (
    <div className={styles.register}>
      <Welcome/>
      <Login/>
    </div>
  )
}

export default Register