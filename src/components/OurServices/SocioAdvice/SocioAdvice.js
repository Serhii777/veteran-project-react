import React from "react";

// import  FormSelect  from "./FormSelect";
import  FormSelect2  from "./FormSelect2";

import styles from "./SocioAdvice.module.css";

const SocioAdvice = () => {
  return (
    <div className={styles.socioAdvice}>
      <h2>Hello from SocioAdvice</h2>

      {/* <FormSelect /> */}
      <FormSelect2 />
      
    </div>
  );
};

export default SocioAdvice;
