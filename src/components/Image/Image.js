// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";

// import styles from "./Image.module.css";

const Image = ({
   src, alt, className, width, height,circle, ...attrs
}) => {
  
  
  // const classes = classNames(
    // className,
    // {circle}
  // );

if (!src) {
  src= `https://via.placeholder.com/${width}*${height}`
  
}

return <img
    src={src}
    alt={alt}
    // className={classes}
    width={width}
     height={height}
     {...attrs}
    />;
};

Image.prototype = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  width:PropTypes.number,
  height:PropTypes.number,
  circle:PropTypes.bool,
};

Image.defaultProps = {
  src: "",
  alt: "image name",
  className: "",
  width: 100,
  height: 100,
  circle: false
};

export default Image;
