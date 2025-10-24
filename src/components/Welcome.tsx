// import LoginSlider from './LoginSlider'
import styles from './welcome.module.scss'
import pattern from '@/assets/pattern.png'
import sliderImg from '../assets/Group 254.png'
import LoginSlider from './LoginSlider'


const Welcome = () => {
  return (
    <div className={styles.smth}>
      <div>
        <img src={pattern} alt="pattern" className={styles.pattern}/>
        <div className={styles.slider}>
          <LoginSlider/>
          {/* <img src={sliderImg} alt="sliderImg" className={styles.sliderImg}/> */}
        </div>
      </div>
    </div>
  )
}

export default Welcome