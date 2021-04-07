import React, { useState, useEffect } from "react";

import styles from "./HomeContent.module.css";

const HomeContent = () => {
  const [count, setCount] = useState(0);
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  }, [count]);

  useEffect(() => {
    document.title = `Вы ввели текст: ${textValue}`;
  }, [textValue]);

  return (
    <div className={styles.homeContent}>
      <h1>Hello from HomeContent</h1>

      <p>Hello from button: {count}</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>

      <p>Hello from input: {textValue}</p>
      {/* <form onSubmit={}> */}
      <form>
        <input
          type="text"
          onChange={() => setTextValue((prevTextValue) => textValue)}
        />
        <button type="submit">Нажми для ввода текста</button>
      </form>
    </div>
  );
};

export default HomeContent;
