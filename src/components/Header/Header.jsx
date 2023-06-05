import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>Logo</h1>
      <nav className={styles.header__nav}>
        <ul className={styles.header__links}>
          <li className={styles["header__links--active"]}>Home</li>
          <li className={styles["header__links--item"]}>Login</li>
          <li className={styles["header__links--item"]}>Register</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
