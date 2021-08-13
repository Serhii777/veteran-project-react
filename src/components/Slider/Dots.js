import React from "react";

import styles from "./Slider.module.css";

// const Dots = ({ activeIndex, sliderImage, onclick }) => {
  const Dots = ({ activeIndex, onPress, sliderImage }) => {
  return (
    <div className={styles.allDots}>
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={
            activeIndex === index
              ? `${styles.dot} ${styles.activeDot}`
              : `${styles.dot}`
          }
        //   onClick={() => onclick(index)}></span>
          onClick={() => onPress(index)}></span>
      ))}
    </div>
  );
};

export default Dots;
