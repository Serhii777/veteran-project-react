import React, { useState, useEffect } from "react";
import axios from "axios";


import styles from "./LegalDocuments.module.css";

const LegalDocuments = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.legalDocuments}>
      <h2>Hello from LegalDocuments</h2>

      <div className={styles.legalDocumentsWrapper}>
        <div className={styles.legalDocumentsContent}>
          <ul>
            {data.hits.map((item) => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <p>{item.textContent}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LegalDocuments;
