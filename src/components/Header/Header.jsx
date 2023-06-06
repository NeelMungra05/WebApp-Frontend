import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles["nav-container"]}>
        <div className={styles.header__logo}>
          <span className={styles.header__name}>Logo</span>
        </div>
        <nav className={styles["nav"]}>
          <a
            href="#"
            className={`${styles.nav__link} ${styles["nav__link--active"]}`}
          >
            <span className={styles.nav__item}>Home</span>
          </a>
          <a href="#" className={styles.nav__link}>
            <span className={styles.nav__item}>Login</span>
          </a>
          <a href="#" className={styles.nav__link}>
            <span className={styles.nav__item}>Register</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
