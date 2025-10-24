import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './LoginSlider.module.scss';
import group from '../assets/Group 254.png';

export default function LoginSlider() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  const scrollTo = (index) => {
    if (!embla) return;
    embla.scrollTo(index);
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {[1, 2, 3, 4].map((_, i) => (
            <div className={styles.embla__slide} key={i}>
              <img src={group} alt="group" />
              <h2 className={styles.title}>Xoş gəlmişsiniz</h2>
              <p className={styles.body}>
                Azərpoçt-da şəxsi kabinet yaratmaqla siz sürətli ödənişlər və köçürmələr edə,
                xərclərinizə və gəlirlərinizə nəzarət edə bilərsiniz
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pagination}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === selectedIndex ? styles.active : ''}`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
