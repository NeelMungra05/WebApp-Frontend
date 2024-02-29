import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/deloitte 1.svg";
import { MdLogout } from "react-icons/md";

const Header = (props) => {
  const navClickHandler = (e) => {
    e.preventDefault();
    props.navbarStateChanger(e.target.innerText.toLowerCase());
  };

  const navActiveStyle = `${styles.nav__link} ${styles["nav__link--active"]}`;
  const navStyle = styles.nav__link;

  let navbar = (
    <nav className={styles["nav"]}>
      <a
        onClick={navClickHandler}
        href="/home"
        className={props.home ? navActiveStyle : navStyle}>
        <span className={styles.nav__item}>Home</span>
      </a>

      <a
        onClick={navClickHandler}
        href="/login"
        className={props.login ? navActiveStyle : navStyle}>
        <span className={styles.nav__item}>Login</span>
      </a>

      <a
        onClick={navClickHandler}
        href="/register"
        className={props.register ? navActiveStyle : navStyle}>
        <span className={styles.nav__item}>Register</span>
      </a>
    </nav>
  );

  if (props.isLoggedIn) {
    navbar = (
      <nav className={styles.nav}>
        <a onClick={navClickHandler} href="/logout" className={navStyle}>
          <MdLogout />
          <span className={styles.nav__item}>Logout</span>
        </a>
      </nav>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles["nav-container"]}>
        <div className={styles.header__logo}>
          <span className={styles.header__name}>
            <img src={logo} width="100px" height="auto" alt="" />
          </span>
          <p className={styles["header__tool--name"]}>
            Enterprise DataSilhouette
            <span className={styles["header__tool__name--smallerR"]}>®</span>
          </p>
        </div>
        {navbar}
      </div>
    </header>
  );
};

export default Header;
