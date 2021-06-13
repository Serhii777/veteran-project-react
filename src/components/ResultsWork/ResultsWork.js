import React, { 
  // useContext,
   useState, useEffect, useRef } from "react";
// import authContext from "../../services/authContext";

// import SwiftSlider from 'react-swift-slider'

// import { useFetchGet, useFetchPost } from "../../services/useFetch";
import { getList, setItem } from "../../services/useFetch";

import styles from "./ResultsWork.module.css";

// const url = "http://localhost:4000/results";

// const data =  [
//   {'id':'1','src':'https://media.mfbproject.co.za/repos/2017_alfa-romeo_stelvio_leaked_02.jpg'},
//   {'id':'2','src':'https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg'},
//   {'id':'3','src':'https://media.mfbproject.co.za/repos/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg'},
//   {'id':'4','src':'https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg'},
//   {'id':'5','src':'https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png'}
// ];

const ResultsWork = () => {
  // const auth = useContext(authContext);
  const [alert, setAlert] = useState(false);
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState([]);

  // const { loading, data } = useFetchGet(url);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    if (list.length && !alert) {
      return;
    }

    getList().then((items) => {
      if (mounted.current) {
        setList(items);
      }
    });
    return () => (mounted.current = false);
  }, [alert, list]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        if (mounted.current) {
          setAlert(false);
        }
      }, 1000);
    }
  }, [alert]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(itemInput).then(() => {
      if (mounted.current) {
        setItemInput("");
        setAlert(true);
      }
    });
  };

  return (
    <div className={styles.resultsWork}>
      <h1>Hello from ResultsWork</h1>

      <ul className={styles.resultsList}>
        {/* {loading && <div className={styles.loader}>Loading...</div>} */}
        {list &&
          list.length > 0 &&
          list.map((item, i) => (
            // console.log("item:", item),
            <li key={i} className={styles.resultsItem}>
              <div className={styles.resultsItemWrapper}>
                <h3 className={styles.resultsTitle}>{item.title}</h3>
                {/* <div className={styles.resultsDate}>{item.date}</div>
                <p className={styles.resultsDescription}>{item.description}</p>
                <p className={styles.resultsText}>{item.text}</p> */}
              </div>
            </li>
          ))}
      </ul>

      <div>
      {/* <SwiftSlider data={data} height={400}/> */}
      </div>

      {/* {auth.isAuthenticated ? ( */}
      <div className={styles.formAdminWrapper}>
        <h2>Hello from Form</h2>
        {/* <LoginReduxForm  */}
        {/* onSubmit={onSubmitForm} */}
        {/* /> */}
        {alert && <h2> Submit Successful</h2>}

        <form onSubmit={handleSubmit}>
          <label>
            <p>New Item</p>
            <input
              type="text"
              onChange={(event) => setItemInput(event.target.value)}
              value={itemInput}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* // ) : null} */}
    </div>
  );
};

export default ResultsWork;
