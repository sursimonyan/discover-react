import cn from "classnames";
import { useState } from "react";
import { useEffect, useRef } from "react";

import styles from "./ProductsFeatures.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../assets/images";

export const ProductsFeatures = () => {
  const [isOnDiv, setIsOnDiv] = useState(false);

  const [openImageNum, setOpenImageNum] = useState(null);

  const scrollRef = useRef(null);

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    setIsOnDiv(entry.isIntersecting);
  });

  const openImage = (id) => {
    setOpenImageNum(id);
    document.body.classList.add("overflow-hidden");
  };

  const closeImage = () => {
    setOpenImageNum(null);
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    observer.observe(scrollRef.current);
  }, [isOnDiv]);

  return (
    <section className={styles.productsfeatures}>
      <h3 className={styles.productsfeatures__title}>Products Features</h3>
      <div
        className={`${cn(styles.productsfeatures__inner, {
          [styles.productsfeatures__inner_scrolled]: isOnDiv,
        })} container`}
        ref={scrollRef}
      >
        <div
          className={`${styles.productsfeatures__item} ${styles.productsfeatures__item_blue}`}
        >
          <h4 className={styles.productsfeatures__item_title}>
            Touch controls
          </h4>
          <p className={styles.productsfeatures__item_desk}>
            Whether you're grabbing objects or performing intricate movements,
            our touch controls provide a seamless and immersive gaming
            experience like no other. Get yours today!
          </p>
          <button
            className={`${styles.productsfeatures__item_btn} ${styles.productsfeatures__item_btn_blue}`}
            onClick={() => openImage(1)}
          >
            View image
          </button>
        </div>
        <div
          className={`${styles.productsfeatures__item} ${styles.productsfeatures__item_violet}`}
        >
          <h4 className={styles.productsfeatures__item_title}>
            charging cable
          </h4>
          <p className={styles.productsfeatures__item_desk}>
            Our charging cable is made with premium materials, such as sturdy
            nylon braiding and reinforced connectors, that ensure a long
            lifespan and reduced risk of fraying or breaking.
          </p>
          <button
            className={`${styles.productsfeatures__item_btn} ${styles.productsfeatures__item_btn_violet}`}
            onClick={() => openImage(2)}
          >
            View image
          </button>
        </div>
        <div
          className={`${styles.productsfeatures__item} ${styles.productsfeatures__item_blue}`}
          onClick={() => openImage(3)}
        >
          <h4 className={styles.productsfeatures__item_title}>VR GLASSES</h4>
          <p className={styles.productsfeatures__item_desk}>
            Our glasses offer crystal clear displays and comfortable design for
            hours of uninterrupted VR adventures.
          </p>
          <button
            className={`${styles.productsfeatures__item_btn} ${styles.productsfeatures__item_btn_blue}`}
          >
            View image
          </button>
        </div>
      </div>
      <div
        className={cn(styles.viewimage, {
          [styles.viewimage__open]: openImageNum,
        })}
        onClick={closeImage}
      >
        <div
          className={cn(styles.viewimage__inner, {
            [styles.viewimage__inner_open]: openImageNum === 1,
          })}
        >
          <img src={images.PopupTouch} alt="TOUCH CONTROLS" />
        </div>
        <div
          className={cn(styles.viewimage__inner, {
            [styles.viewimage__inner_open]: openImageNum === 2,
          })}
        >
          <img src={images.PopupCharger} alt="PROCESSOR" />
        </div>
        <div
          className={cn(styles.viewimage__inner, {
            [styles.viewimage__inner_open]: openImageNum === 3,
          })}
        >
          <img src={images.PopupVR} alt="VR GLASSES" />
        </div>
      </div>
    </section>
  );
};
