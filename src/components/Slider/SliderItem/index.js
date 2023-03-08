import cn from "classnames";
import { useEffect, useRef, useState } from "react";

import styles from "./SliderItem.module.scss";
import { images } from "../../../assets/images";

export const SliderItem = () => {
  const [isOnDiv, setIsOnDiv] = useState(false);
  const scrollRef = useRef(null);

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    setIsOnDiv(entry.isIntersecting);
  });

  useEffect(() => {
    observer.observe(scrollRef.current);
  }, []);

  return (
    <div className={styles.slideritem} ref={scrollRef}>
      <div className={cn(styles.slideritem__info, { [styles.slideritem__translate]: isOnDiv})}>
        <h4 className={styles.slideritem__title}>experiences</h4>
        <p className={styles.slideritem__desk}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters 
        </p>
      </div>
      <div className={cn(styles.slideritem__images, { [styles.slideritem__translate]: isOnDiv})}>
        <div className={styles.slideritem__image_item}>
          <img src={images.SliderImg1} alt="SLider 1" />
        </div>
        <div className={styles.slideritem__image_item}>
          <img src={images.SliderImg2} alt="SLider 2" />
        </div>
      </div>
    </div>
  );
};
