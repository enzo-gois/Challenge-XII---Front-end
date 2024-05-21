import React from "react";
import styles from "./SuccessMessage.module.css";

const SuccessMessage = () => {
  return (
    <div className={styles.success}>
      <img
        className={styles.image}
        src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/check+icon+1.svg"
        alt=""
      />
      <h1 className={styles.text}>Welcome, Driver</h1>
    </div>
  );
};

export default SuccessMessage;
