import styles from './welcome.module.scss'
import pattern from '../assets/pattern.png'
import LoginSlider from './LoginSlider'

const Welcome = () => {
  return (
    <div className={styles.smth}>
      <img src={pattern} alt="" />
      <div>
        <LoginSlider/>
      </div>
    </div>
  )
}

export default Welcome