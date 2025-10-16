import Slider from "react-slick";
import type { Settings } from "react-slick";
import group from '../assets/Group 254.png'
import styles from './LoginSlider.module.scss'

function LoginSLider() {

const settings: Settings = {
  dots: true,
  lazyLoad: "ondemand", 
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div className={styles.imgContainer}>
          <img src={group} alt="group"/>
        </div>
        <div>
          <img src={group} alt="group"/>
        </div>
        <div>
          <img src={group} alt="group"/>
        </div>
        <div>
          <img src={group} alt="group"/>
        </div>
      </Slider>
    </div>
  );
}

export default LoginSLider;
