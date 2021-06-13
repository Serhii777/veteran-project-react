import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import Button from "../Button/Button";
// import { connect } from 'react-redux';
import { authSelectors } from "../../redux/auth";
import styles from "./AdminInfo.module.css";

// function AdminInfo({ showName = "admin", onLogout }) {
function AdminInfo({ showName }) {
  if (showName !== null) {
    return (
      <div className={styles.adminInfo}>
        <div className={styles.adminInfoWrapper}>
          {/* <li className={styles.adminInfoItem}> */}
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

          {/* <p className={styles.adminInfoText}>
              Памятай! При закінченні роботи, будь-ласка, натисни кнопочку
              "Вихід"!{" "}
            </p>
          </li>
          <li className={styles.adminInfoItem}>
            <div className={styles.buttonAdminInfoWrapper}>
              <Link to={`/`} className={styles.buttonAdminInfo}>
                <Button title={"Вихід"} onClick={onLogout} role={"link"} />
              </Link>
            </div> */}
          {/* </li> */}
        </div>
      </div>
    );
  }
  return <></>;
}

// const mapStateToProps = state => ({
//   showName: authSelectors.getUserName(state),
// });
const mapStateToProps = (state) => {
console.log("state:", state);

  return {
    showName: authSelectors.getUserName(state),
  };
};

// const mapDispatchToProps = {
//   onLogOut: authOperations.logOut,
// };

export default connect(mapStateToProps, null)(AdminInfo);
// export default AdminInfo;
