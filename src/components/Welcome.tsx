// import LoginSlider from './LoginSlider'
import styles from './welcome.module.scss'
import pattern from '@/assets/pattern.png'


const Welcome = () => {
  return (
    <div className={styles.smth}>
      <div>
        <img src={pattern} alt="pattern" className={styles.pattern}/>
        <div>
          {/* <LoginSlider/> */}
        </div>
      </div>
    </div>
  )
}

export default Welcome