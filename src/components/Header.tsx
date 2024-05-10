import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoheader}>
        <img src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/Logo+(1).svg" alt="" />
      </div>
      <div className={styles.navheader}>
        <p className={styles.selected}>Home</p>
        <p>Getting a Taxi</p>
        <p>Mobile App</p>
        <p>Contact Us</p>
      </div>
      <div className={styles.bellheader}>
        <img src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/Group+6.svg" alt="" width={24}  height={26.67} />
         <p> | </p>
        <img src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/user-avatar.svg" alt="" width={36} height={36} />
      </div>
    </div>
  )
}

export default Header
