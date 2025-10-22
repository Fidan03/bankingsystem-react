import Welcome from '../components/Welcome'
import Password from '../components/Password'
import styles from './PasswordRecoveryPage.module.scss'

const PasswordRecoveryPage = () => {
  return (
    <div className={styles.recover}>
        <div><Welcome/></div>
        <div><Password/></div>
    </div>
  )
}

export default PasswordRecoveryPage