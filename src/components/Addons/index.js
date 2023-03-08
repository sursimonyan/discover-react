import { images } from "../../assets/images";
import styles from "./Addons.module.scss";

export const Addons = () => {
  return (
    <>
      <section className={styles.addons}>
        <div className={`${styles.addons__inner} container`}>
          <h2 className={styles.addons__title}>ADD ONS</h2>
          <div className={styles.addons__items_wrap}>
            <div className={styles.addons__item}>
              <div className={styles.addons__item_inner}>
                <div className={styles.addons__item_img}>
                  <img src={images.Addon1} alt="VR" />
                </div>
                <div className={styles.addons__item_info}>
                  <h4 className={styles.addons__item_title}>Meta Quest 2</h4>
                  <p className={styles.addons__item_desc}>
                    Go all in with an ergonomic strap
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.addons__item}>
              <div className={styles.addons__item_inner}>
                <div className={styles.addons__item_img}>
                  <img src={images.Addon2} alt="Link Cable" />
                </div>
                <div className={styles.addons__item_info}>
                  <h4 className={styles.addons__item_title}>Link Cable</h4>
                  <p className={styles.addons__item_desc}>
                    Access the Rift library with Meta Quest 2.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.addons__item}>
              <div className={styles.addons__item_inner}>
                <div className={styles.addons__item_img}>
                  <img src={images.Addon3} alt="Logitech G333 VR" />
                </div>
                <div className={styles.addons__item_info}>
                  <h4 className={styles.addons__item_title}>
                    Logitech G333 VR
                  </h4>
                  <p className={styles.addons__item_desc}>
                    Access the Rift library with Meta Quest 2.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addons__animation}>
          <img src={images.CircleAnim} alt="Orbit" />
        </div>
      </section>
      <div className={styles.bottom_animation}>
        <img src={images.BottomAnim} alt="Orbit" />
      </div>
    </>
  );
};
