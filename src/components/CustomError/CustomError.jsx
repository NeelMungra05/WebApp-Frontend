import React from "react";
import styles from "./CustomError.module.css";

const CustomError = ({ message }) => <p className={styles.error}>{message}</p>;

export default CustomError;
