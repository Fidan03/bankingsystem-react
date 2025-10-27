import React from 'react'
import styles from './OTPPaaswordCheck.module.scss'
import Welcome from '../components/Welcome'
import PasswordCheck from '../components/PasswordCheck'

const OTPPassowrdCheck = () => {
  return (
    <div className={styles.OTPPassword}>
        <div><Welcome/></div>
        <div><PasswordCheck/></div>
    </div>
  )
}

export default OTPPassowrdCheck