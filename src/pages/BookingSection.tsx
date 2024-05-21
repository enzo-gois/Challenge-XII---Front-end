import React from "react";
import styles from "../styles/BookingSection.module.css";
import FormBooking from "@/components/FormBooking";

const BookingSection = () => {
  return (
    <div id="gettingTaxi" className={styles.section}>
      <div className={styles.heroImage}>
        <img
          src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/Hero+image.png"
          alt=""
        />
      </div>
      <section className={styles.formSection}>
        <h2 className={styles.h2}>NEED A RIDE?</h2>
        <h1 className={styles.h1}>
          Book with{" "}
          <span className={styles.span}>
            <i style={{ fontWeight: 500 }}>my</i>RIDE
          </span>{" "}
          now!
        </h1>
        <FormBooking />
      </section>
    </div>
  );
};

export default BookingSection;
