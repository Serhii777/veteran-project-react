import React, { Fragment, useRef, useState, useEffect } from "react";

import styles from "./ButtonGoTop.module.css";

const ButtonGoTop = (props) => {
  const [intervalId, setIntervalId] = useState(0);
  const [isBottom, setBottom] = useState(false);
  const [thePosition, setThePosition] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref && ref.current;

    if (element) {
      const checkIsBottomOfPage = () => {
        if (window.scrollY >= window.innerHeight) {
          setThePosition(true);
        } else {
          setThePosition(false);
        }
      };

      document.addEventListener("scroll", checkIsBottomOfPage);

      window.scrollTo({
        top: element.scrollHeight,
      });
      checkIsBottomOfPage();

      return () => {
        return document.removeEventListener("scroll", checkIsBottomOfPage);
      };
    }
  }, [ref]);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(ref.current);
    }
    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollToTop = () => {
    ref.current = setInterval(onScrollStep, props.delayInMs);
  };

  const renderGoTopIcon = () => {
    return (
      <button
        className={`go-top ${thePosition ? "active" : ""}`}
        onClick={scrollToTop}>
        Up
      </button>
    );
  };

  return <Fragment>{renderGoTopIcon()}</Fragment>;
};

export default ButtonGoTop;
