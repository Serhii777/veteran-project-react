import React from "react";

import { IMAGES_URL } from "../../services/apiUrl";

import styles from "./Slider.module.css";

const SliderContent = ({ activeIndex, newListImages }) => {
  // console.log("newListImagesCont: ", newListImages);

  return (
    <section className={styles.section}>
      {newListImages && newListImages.length > 0
        ? newListImages.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index === activeIndex
                    ? `${styles.slides} ${styles.active}`
                    : `${styles.inActive}`
                }>
                <img
                  className={styles.slideImage}
                  src={
                    `${IMAGES_URL}/` +
                    `${slide.image}`.split("").slice(12).join("")
                  }
                  alt={slide.title}
                />
                {slide.title ? (
                  <h3 className={styles.slideTitle}>{slide.title}</h3>
                ) : null}
                {slide.description ? (
                  <h4 className={styles.slideDescription}>
                    {slide.description}
                  </h4>
                ) : null}
              </div>
            );
          })
        : null}
    </section>
  );
};

export default SliderContent;
