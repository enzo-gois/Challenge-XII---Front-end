import React from 'react'
import styles from '../styles/DriveWithSection.module.css'
import FormDriveWith from '@/components/FormDriveWith'

const DriveWithSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.firstContainer}>
        <img src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/Popup+image.svg" alt="" />
        <div>
          <p className={styles.textP}>Drive with MyRide</p>
          <span className={styles.textSpan}>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</span>
        </div>
      </div>
      <FormDriveWith />
    </section>
  )
}

export default DriveWithSection
