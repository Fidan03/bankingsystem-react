
import styles from './LoginSlider.module.scss';
import group from '../assets/Group 254.png';


import useEmblaCarousel from 'embla-carousel-react'

export default function LoginSlider() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <img src={group} alt="group" />
        </div>
        <div className={styles.embla__slide}>
          <img src={group} alt="group" />
        </div>
        <div className={styles.embla__slide}>
          <img src={group} alt="group" />
        </div>
      </div>
    </div>
  )
}

