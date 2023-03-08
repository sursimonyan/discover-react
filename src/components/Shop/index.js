import cn from "classnames";
import { useState, useEffect, useRef } from "react";
import { images } from "../../assets/images";

import styles from "./Shop.module.scss";

export const Shop = () => {
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
    <section className={styles.shop}>
      <h3 className={styles.shop__title}>
        Shop <span className={styles.shop__title_violet}>meta </span> quest
      </h3>
      <p className={styles.shop__description}>
        Our VR glasses are designed with the user in mind, offering super-smooth
        displays for a seamless and uninterrupted VR experience. With longer
        battery life than other VR glasses on the market, you can spend more
        time immersed in your virtual adventures without worrying about running
        out of juice. Our glasses also provide a comfortable and ergonomic
        design, allowing you to fully immerse yourself in the virtual world
        without sacrificing comfort. Get ready to take your VR gaming to the
        next level with our VR glasses “Meta Quest”.
      </p>
      <div className={styles.shop__meta}>
        <div className={styles.shop__meta_animation}>
          <img
            src={images.Orbit}
            className={styles.shop__meta_animation_img}
            alt="Planet Animation"
          />
        </div>
        <div className={`${styles.shop__meta_inner} container`}>
          <div
            className={cn(styles.shop__meta_vr, {
              [styles.shop__meta_translate]: isOnDiv,
            })}
            ref={scrollRef}
          >
            <h4 className={styles.shop__meta_title}>meta quest</h4>
            <div className={styles.shop__meta_image}>
              <img src={images.VRImg} alt="VR helmet" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
