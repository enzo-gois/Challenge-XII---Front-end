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
            <li>About Us</li>
            <li>News</li>
            <li>Careers</li>
            <li>How we work</li>
          </ul>
        </div>
        <div className={styles.moreLinks}>
          <p>Support</p>
          <ul>
            <li>FAQ</li>
            <li>US Ofiice</li>
            <li>Asia Office</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className={styles.moreLinks}>
          <p>More</p>
          <ul>
            <li>Become a partner</li>
            <li>Partner Support</li>
            <li>Mobile app links</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
