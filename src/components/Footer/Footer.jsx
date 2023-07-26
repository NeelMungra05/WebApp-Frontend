import React from "react";
import { styled } from "styled-components";
import styles from "./Footer.module.css";
  
const Footer = () => {
//   return(
//     <footer className={styles.footer}>
//     <p>Disclaimer:  

// Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited, a UK private company limited by guarantee ("DTTL"), its network of member firms, and their related entities. DTTL and each of its member firms are legally separate and independent entities. DTTL (also referred to as "Deloitte Global") does not provide services to user. Please see www.deloitte.com/about for a more detailed description of DTTL and its member firms. 

// This tool is a software/application-based tool developed for internal use and exclusively owned by Deloitte Touche Tohmatsu India LLP (DTTILLP). The tool enables collecting, compiling or obtaining information. User shall not copy, reproduce, modify, distribute, disseminate the tool, nor will the user reverse engineer, decompile, dismantle or obtain access to the underlying formulae of the tool. 

// © 2023 Deloitte Touche Tohmatsu India LLP </p>
//   </footer>
//   );

return(
  <footer className={styles.footer}>
  <div className={styles["foot-container"]}>
  <p>Disclaimer:  

Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited, a UK private company limited by guarantee ("DTTL"), its network of member firms, and their related entities. DTTL and each of its member firms are legally separate and independent entities. DTTL (also referred to as "Deloitte Global") does not provide services to user. Please see www.deloitte.com/about for a more detailed description of DTTL and its member firms. 

This tool is a software/application-based tool developed for internal use and exclusively owned by Deloitte Touche Tohmatsu India LLP (DTTILLP). The tool enables collecting, compiling or obtaining information. User shall not copy, reproduce, modify, distribute, disseminate the tool, nor will the user reverse engineer, decompile, dismantle or obtain access to the underlying formulae of the tool. 

© 2023 Deloitte Touche Tohmatsu India LLP </p>
    
   
  </div>
</footer>

);

};
export default Footer;