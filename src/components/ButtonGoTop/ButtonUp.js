import React, { useRef, useEffect } from "react";
import SvgArrowUp2 from "../SvgComponents/SvgArrowUp2";

import styles from "./ButtonUp.module.css";

const ButtonUp = (props) => {
  const refElem = useRef(null);

  useEffect(() => {
    const scrollElement = refElem && refElem.current;

    if (scrollElement) {
      const checkIsBottomOfPage = () => {
        window.onscroll = function () {
          if (
            document.documentElement.scrollTop <
            document.documentElement.clientHeight / 3
          ) {
            scrollElement.classList.remove("hide");
            scrollElement.className = `${styles.buttonWrapper} ${styles.isHidden}`;
          } else {
            scrollElement.className = `${styles.buttonWrapper}`;
          }
        };
      };

      scrollElement.addEventListener("click", goToUp);

      function goToUp() {
        window.scrollTo({
          top: scrollElement.scrollHeight -53,
          behavior: "smooth",
        });
      }

      document.addEventListener("scroll", checkIsBottomOfPage);

      checkIsBottomOfPage();

      return () => {
        return document.removeEventListener("scroll", checkIsBottomOfPage);
      };
    }
  }, []);

  return (
    <div ref={refElem} className={styles.hide}>
      <button className={styles.scrollTop}>
        <SvgArrowUp2 />
      </button>
    </div>
  );
};

export default ButtonUp;
