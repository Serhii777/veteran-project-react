import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../Button/Button";
import { authOperations, authSelectors } from "../../redux/auth";
import styles from "./AdminInfoHeader.module.css";

const AdminInfoHeader = ({ showName, onLogout, isAuthenticated }) => {
  return isAuthenticated ? (
    <div className={styles.adminInfo}>
      <h4 className={styles.adminInfoTitle}>Адміністративна частина сайту</h4>
      <div className={styles.adminInfoWrapper}>
        <p className={styles.adminInfoWelcome}>
          Привіт <span className={styles.adminInfoSpan}>{showName}! </span>
          <p>
            Що, хочеться попрацювати? Ну тоді вперед до роботи! Знайди розділ,
            який потрібно змінити, натисни кнопку внизу потрібного блоку з
            текстом, внеси потрібні зміни та збережи їх.
          </p>
        </p>
        <div className={styles.adminInfoHeaderWrapper}>
          <p className={styles.adminInfoText}>
            Памятай! По закінченню роботи, будь-ласка, натисни кнопочку "Вихід"!
          </p>
          <div className={styles.buttonHeaderWrapper}>
            <Link to={`/`} className={styles.buttonHeader}>
              <Button title={"Вихід"} onClick={onLogout} role={"link"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  showName: authSelectors.getUserName(state),
  isAuthenticated: authSelectors.isAuthenticatedToken(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminInfoHeader);
