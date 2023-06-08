import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  console.log("This is header.jsx");

  const navClickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.innerText.toLowerCase());
    props.navbarStateChanger(e.target.innerText.toLowerCase());
  };

  const navActiveStyle = `${styles.nav__link} ${styles["nav__link--active"]}`;
  const navStyle = styles.nav__link;

  let navbar = (
    <nav className={styles["nav"]}>
      <a
        onClick={navClickHandler}
        href="/home"
        className={props.home ? navActiveStyle : navStyle}
      >
        <span className={styles.nav__item}>Home</span>
      </a>

      <a
        onClick={navClickHandler}
        href="/login"
        className={props.login ? navActiveStyle : navStyle}
      >
        <span className={styles.nav__item}>Login</span>
      </a>

      <a
        onClick={navClickHandler}
        href="/register"
        className={props.register ? navActiveStyle : navStyle}
      >
        <span className={styles.nav__item}>Register</span>
      </a>
    </nav>
  );

  if (props.isLoggedIn) {
    console.log(props.isLoggedin);
    navbar = (
      <nav className={styles.nav}>
        <a href="/logout" className={navStyle}>
          <span className={styles.nav__item}>Logout</span>
        </a>
      </nav>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles["nav-container"]}>
        <div className={styles.header__logo}>
          <span className={styles.header__name}>Logo</span>
        </div>
        {navbar}
      </div>
    </header>
  );
};

export default Header;
