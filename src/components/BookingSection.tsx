import React from 'react'
import styles from './BookingSection.module.css'

const BookingSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.heroImage}>
        <img src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/Hero+image.png" alt="" />
      </div>
      <section className={styles.formSection}>
        <h2 className={styles.h2}>NEED A RIDE?</h2>
        <h1 className={styles.h1}>Book with <span className={styles.span}><i>my</i>RIDE</span> now!</h1>
        <div className={styles.formBox}>
          <form className={styles.form}>
            <p>Find a ride now</p>
            <label className={styles.text} htmlFor="currentLocation">Your Pickup: </label>
            <input className={styles.input} type="text" placeholder="Current location" name="currentLocation" />
            <label className={styles.text} htmlFor="yourDestination">Your Destination: </label>
            <input className={styles.input} type="text" placeholder="Your Destination" name="yourDestination" />
            <div className={styles.find}>
              <button> FIND A DRIVER</button>
              <p>MORE OPTIONS</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default BookingSection
