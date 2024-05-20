import React, { useState } from "react";
import styles from "../styles/DriveWithSection.module.css";
import FormDriveWith from "@/components/FormDriveWith";
import SuccessMessage from "@/components/SuccessMessage";

const DriveWithSection = () => {
  const [formSubtitetd, setFormSubtitted] = useState(false);

  const handleFormSuccess = () => {
    console.log("handleFormSuccess called");
    setFormSubtitted(true);
  };

  return (
    <section id="mobileApp" className={styles.section}>
      <div className={formSubtitetd ? styles.displayNone : ""}>
        <div className={styles.firstContainer}>
          <img
            src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/Popup+image.svg"
            alt=""
          />
          <div className={styles.texts}>
            <p className={styles.textP}>Drive with MyRide</p>
            <span className={styles.textSpan}>
              Register as a driver using the form below. Our team will assess
              and get back to you within 48 hours.
            </span>
          </div>
        </div>
        <FormDriveWith onSuccess={handleFormSuccess} />
      </div>
      {formSubtitetd && <SuccessMessage />}
    </section>
  );
};

export default DriveWithSection;
