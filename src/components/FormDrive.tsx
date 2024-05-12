import React from 'react'
import styles from '../components/FormDrive.module.css'

import CarButton from './CarButton'

const FormDrive = () => {
  return (
    <section className={styles.section}>
      <div className={styles.firstContainer}>
        <img src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/Popup+image.svg" alt="" />
        <div>
          <p className={styles.textP}>Drive with MyRide</p>
          <span className={styles.textSpan}>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</span>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.formDiv}>
          <input className={styles.inputFNome} type="text" placeholder='First Name' />
          <input className={styles.inputLNome} type="text" placeholder='Last Name'/>
        </div>
        <div className={styles.formDiv1}>
          <input className={styles.input} type="email" placeholder='Email Adress'/>
          <label className={styles.labelCountry} htmlFor="">Country:</label>
          <input className={styles.inputCountry} type="text" placeholder='Country'/>
          <input className={styles.input} type="text" placeholder='City'/>
          <input className={styles.input} type="text" placeholder='Referral Code'/>
        </div>
        <div style={{marginLeft: 30}}>
          <div className={styles.checkBox}>
            <label className={styles.label}>I drive my own car</label>
            <div className={styles.container}>
              <input type="checkbox" id="check" />
              <label htmlFor="check" className={styles.button}></label>
            </div>
          </div>
          <p className={styles.carType}>Select you car type</p>
          <div className={styles.SelectCarTypes}>
            <CarButton iconName='fa6-solid:car-side' iconWidth={30} iconClass='Sedan' />
            <CarButton iconName='fa6-solid:van-shuttle' iconWidth={30} iconClass='SUV/Van' />
            <CarButton iconName='mdi:car-sports' iconWidth={40} iconClass='Semi Luxury' />
            <CarButton iconName='mdi:car-convertible' iconWidth={40} iconClass='Luxury Car' />
          </div>
          <button className={styles.submit}>SUBMIT</button>
        </div>
      </form>
    </section>
  )
}

export default FormDrive
