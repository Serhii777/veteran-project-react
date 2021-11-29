import React, { Component } from "react";
import styles from "./Picker.module.css";

class Picker extends Component {
  render() {
    const { date, onChangeData } = this.props;
    return (
      <input
        className={styles.inputDate}
        type="date"
        name="date"
        value={date}
        onChange={onChangeData}
      />
    );
  }
}

export default Picker;
