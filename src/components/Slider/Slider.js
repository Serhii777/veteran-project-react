import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Arrows from "./Arrows";
import Dots from "./Dots";

import styles from "./Slider.module.css";

const Slider = ({ sliderImage }) => {
  const newListImages = sliderImage
    .map(({ contentText }) => contentText)
    .reduce((commonObj, slide) => {
      return [...commonObj, ...slide];
    }, []);

  const leng = newListImages.length - 1;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === leng ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, leng]);

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderContainer}>
        <SliderContent
          activeIndex={activeIndex}
          newListImages={newListImages}
        />

        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? leng : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(
              activeIndex < 1
                ? leng
                : leng < activeIndex
                ? activeIndex + 1
                : activeIndex - 1
            )
          }
        />
        <Dots
          activeIndex={activeIndex}
          sliderImage={newListImages}
          onPress={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </div>
  );
};

export default Slider;
