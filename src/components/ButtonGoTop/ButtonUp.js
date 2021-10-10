import React, { useRef, useEffect } from "react";
// import SvgArrowUp from "../SvgComponents/SvgArrowUp";
// import SvgArrowUpLarge from "../SvgComponents/SvgArrowUpLarge";
// import SvgArrowUpMouse from "../SvgComponents/SvgArrowUpMouse";
// import SvgArrowUp1 from "../SvgComponents/SvgArrowUp1";
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
            scrollElement.className = `${styles.buttonWrapper} ${styles.isHidden}`;
          } else {
            scrollElement.className = `${styles.buttonWrapper}`;
          }
        };
      };

      scrollElement.addEventListener("click", goToUp);

      function goToUp() {
        window.scrollTo({
          top: scrollElement.scrollHeight,
          behavior: "smooth",
        });
      }

      document.addEventListener("scroll", checkIsBottomOfPage);

      checkIsBottomOfPage();

      return () => {
        return (
           document.removeEventListener(
            "scroll",
            checkIsBottomOfPage)
        //   (scrollElement.className = `${styles.scrollTop}`)
        );
      };
    }
  }, []);

  return (
    <div ref={refElem} >
      <button className={styles.scrollTop}>
        {/* <SvgArrowUp /> */}
        {/* <SvgArrowUpLarge /> */}
        {/* <SvgArrowUpMouse /> */}
        {/* <SvgArrowUp1 /> */}
        <SvgArrowUp2 />
      </button>
    </div>
  );
};

export default ButtonUp;
