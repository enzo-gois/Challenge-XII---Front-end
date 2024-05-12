import React from 'react'
import styles from './CarButton.module.css'
import { Icon } from '@iconify/react/dist/iconify.js'
import CarButtonProps from '../interfaces/CarButtonProps'

const CarButton: React.FC<CarButtonProps> = ({iconName, iconWidth, iconClass}) => {
  return (
    <button className={styles.buttonCar}>
      <Icon icon={iconName} style={{color: '#FBA403',height: 40, width: iconWidth}} />
      <span>{iconClass}</span>
    </button >
  )
}

export default CarButton
