import React from "react";
import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles.footer}>
        <p>© 2024 Deloitte Touche Tohmatsu India LLP</p>
        Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited, a UK
        private company limited by guarantee ("DTTL"), its network of member
        firms, and their related entities. DTTL and each of its member firms are
        legally separate and independent entities. DTTL (also referred to as
        "Deloitte Global") does not provide services to user. Please see
        www.deloitte.com/about for a more detailed description of DTTL and its
        member firms. This tool is a software/application-based tool developed
        for internal use and exclusively owned by Deloitte Touche Tohmatsu India
        LLP (DTTILLP). The tool enables collecting, compiling or obtaining
        information. User shall not copy, reproduce, modify, distribute,
        disseminate the tool, nor will the user reverse engineer, decompile,
        dismantle or obtain access to the underlying formulae of the tool.
      </div>
    </div>
  );
};

export default Footer;
