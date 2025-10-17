import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules'; // ✅ Add Pagination
import 'swiper/css';
import 'swiper/css/pagination'; // ✅ Import pagination styles
import styles from './LoginSlider.module.scss';
import group from '../assets/Group 254.png';

export default function LoginSlider() {
  return (
    <Swiper
      modules={[Mousewheel, Pagination]} 
      mousewheel={{ forceToAxis: true }}
      pagination={{ clickable: true }} 
      spaceBetween={50}
      slidesPerView={1}
      speed={600}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.slider}
    >
      <SwiperSlide>
        <img src={group} alt="group" className={styles.image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={group} alt="group" className={styles.image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={group} alt="group" className={styles.image} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={group} alt="group" className={styles.image} />
      </SwiperSlide>
    </Swiper>
  );
}
