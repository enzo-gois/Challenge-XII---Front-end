import React from 'react'
import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={styles.containerError}>
      <img src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/image+24.svg" alt="" width={16} height={16} /> 
      <p className={styles.error}>{message}</p>
    </div>
  )
}

export default ErrorMessage
