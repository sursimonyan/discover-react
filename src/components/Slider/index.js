import Slider from "react-slick";
import { SliderItem } from "./SliderItem";

import styles from "./SliderWrap.module.scss";

export const SliderWrap = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={`${styles.sliderwrap} container`}>
      <Slider {...settings}>
        <SliderItem />
        <SliderItem />
      </Slider>
    </section>
  );
};
