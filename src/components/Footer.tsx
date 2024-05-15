import React from 'react'
import styles from './Footer.module.css'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.initialFooter}>
        <img src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/Logo.svg" alt="" />
        <p>MyRide Inc., 2nd Floor, New York, NY 10016</p>
        <div className={styles.socials}>
          <SocialIcon url="www.facebook.com" bgColor='white' fgColor='transparent' style={{width: 36.57, height: 36.57 }} />
          <SocialIcon url="www.instagram.com" bgColor='white' fgColor='transparent' style={{width: 36.57, height: 36.57 }} />
          <SocialIcon url="www.twitter.com" bgColor='white' fgColor='transparent' style={{width: 36.57, height: 36.57 }} />
        </div>
      </div>
      <div className={styles.rightFooter}>
        <div className={styles.moreLinks}>
          <p>Company</p>
          <ul>
            <li> <a href="/not-found">About Us</a> </li> 
            <li> <a href="/not-found">News</a> </li>
            <li> <a href="/not-found">Careers</a> </li>
            <li> <a href="/not-found">How we work</a> </li>
          </ul>
        </div>
        <div className={styles.moreLinks}>
          <p>Support</p>
          <ul>
            <li> <a href="/not-found">FAQ</a> </li>
            <li> <a href="/not-found">US Ofiice</a> </li>
            <li> <a href="/not-found">Asia Office</a> </li>
            <li> <a href="/not-found">Help Center</a> </li>
          </ul>
        </div>
        <div className={styles.moreLinks}>
          <p>More</p>
          <ul>
            <li> <a href="/not-found">Become a partner</a> </li>
            <li> <a href="/not-found">Partner Support</a> </li>
            <li> <a href="/not-found">Mobile app links</a> </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
