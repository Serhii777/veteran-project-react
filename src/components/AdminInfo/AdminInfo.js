import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";
import styles from "./AdminInfo.module.css";

function AdminInfo({ showName }) {
  if (showName !== null) {
    return (
      <div className={styles.adminInfo}>
        <div className={styles.adminInfoWrapper}>
          <p className={styles.adminInfoWelcome}>
            Нумо до роботи, наш{" "}
            <span className={styles.adminInfoSpan}>{showName}.</span>
          </p>
          <p className={styles.adminInfoWelcome}>
            Щоб продовжити натисни кнопку:
            <Link to="/" className={styles.adminInfoLink}>
              <span className={styles.adminInfoSpanLink}>Далі</span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
  return <></>;
}

const mapStateToProps = (state) => {
  // console.log("state:", state);

  return {
    showName: authSelectors.getUserName(state),
  };
};

export default connect(mapStateToProps, null)(AdminInfo);
