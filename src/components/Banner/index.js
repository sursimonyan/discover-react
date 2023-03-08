import cn from "classnames";

import styles from "./Banner.module.scss";
import { images } from "../../assets/images";
import { useEffect, useState } from "react";

export const Banner = () => {
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    setIsloaded(true);
  }, []);

  return (
    <section className={styles.banner}>
      <div className={styles.banner__img}>
        <img src={images.Banner} alt="Banner" />
        <img
          src={images.Animation}
          className={styles.banner__animation}
          alt="Animation"
        />
      </div>
      <div className={`${styles.banner__inner} container`}>
        <div className={styles.banner__content}>
          <h1
            className={cn(styles.banner__title, {
              [styles.banner__translate]: isLoaded,
            })}
          >
            Disc<span className={styles.banner__title_purple}>o</span>ver
          </h1>
          <p
            className={cn(styles.banner__desk, {
              [styles.banner__translate]: isLoaded,
            })}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className={styles.banner__orbit_wrap}>
        <img src={images.Orbit} alt="Orbit" className={styles.banner__orbit} />
      </div>
    </section>
  );
};
