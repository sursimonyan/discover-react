import { images } from "../../assets/images";
import styles from "./Included.module.scss";

export const Included = () => {
  return (
    <section className={`${styles.included} container`}>
      <h3 className={styles.included__title}>what’s included</h3>
      <div className={styles.included__items}>
        <div className={styles.included__item}>
          <div className={styles.included__item_inner}>
            <div className={styles.included__item_img}>
              <img src={images.VRImg} alt="VR" />
            </div>
            <h4 className={styles.included__item_title}>VR Headset</h4>
          </div>
        </div>
        <div className={styles.included__item}>
          <div className={styles.included__item_inner}>
            <div className={styles.included__item_img}>
              <img src={images.TouchesImg} alt="VR" />
            </div>
            <h4 className={styles.included__item_title}>
              Two Touch Controllers
            </h4>
          </div>
        </div>
        <div className={styles.included__item}>
          <div className={styles.included__item_inner}>
            <div className={styles.included__item_img}>
              <img src={images.ChargingImg} alt="VR" />
            </div>
            <h4 className={styles.included__item_title}>
              Charging Cable & Power Adapter
            </h4>
          </div>
        </div>
        <div className={styles.included__item}>
          <div className={styles.included__item_inner}>
            <div className={styles.included__item_img}>
              <img src={images.GlassesImg} alt="VR" />
            </div>
            <h4 className={styles.included__item_title}>Glasses Spacer</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
