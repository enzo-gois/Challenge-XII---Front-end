import React, { useState } from 'react'
import styles from '../components/FormDrive.module.css'

import CarButton from './CarButton'
import { useCountries } from '@/hooks/useCountries'
import { useCities } from '@/hooks/useCities'

const FormDrive = () => {
  const { countries } = useCountries()
  const [selectedCountry, setSelectedCountry] = useState('')
  const { cities } = useCities({country: selectedCountry})

  const handleStateUpdate = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedCountry(event.target.value)
  }

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [driveOwnCar, setDriveOwnCar] = useState(false);
  const [carType, setCarType] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      country: selectedCountry, 
      city: selectedCity, 
      referral_code: referralCode,
      own_car: driveOwnCar,
      car_type: carType,
    };

    try {
      const response = await fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Formulário enviado com sucesso!');
      } else {
        console.error('Erro ao enviar o formulário');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.firstContainer}>
        <img src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/Popup+image.svg" alt="" />
        <div>
          <p className={styles.textP}>Drive with MyRide</p>
          <span className={styles.textSpan}>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</span>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formDiv}>
          <input 
            className={styles.inputFNome} 
            type="text" 
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)} 
          />
          <input 
            className={styles.inputLNome} 
            type="text" 
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)} 
          />
        </div>
        <div className={styles.formDiv1}>
          <input 
            className={styles.input} 
            type="email" 
            placeholder='Email Adress'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.labelCountry} htmlFor="">Country:</label>
          <select 
            className={styles.select} 
            value={selectedCountry} 
            onChange={handleStateUpdate} 
          >
            <option className={styles.option} value="" disabled >Country</option>
            {countries.map(country => (
              <option value={country}>{country}</option>
            ))}
          </select>
          <select 
            className={styles.select} 
            value={selectedCity} 
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option className={styles.option} value="" disabled >City</option>
            {cities && cities.map(city => (
              <option value={city}>{city}</option>
            ))}
          </select>
          <input 
            className={styles.input} 
            type="text" 
            placeholder='Referral Code'
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
          />
        </div>
        <div style={{marginLeft: 30}}>
          <div className={styles.checkBox}>
            <label className={styles.label}>I drive my own car</label>
            <div className={styles.container}>
              <input 
                type="checkbox" 
                id="check" 
                checked={driveOwnCar}
                onChange={(e) => setDriveOwnCar(e.target.checked)}
              />
              <label htmlFor="check" className={styles.button}></label>
            </div>
          </div>
          <p className={styles.carType}>Select you car type</p>
          <div className={styles.SelectCarTypes}>
            <CarButton 
              iconName='fa6-solid:car-side' 
              iconWidth={30} iconClass='Sedan' onClick={() => setCarType('Sedan')} 
            />
            <CarButton 
              iconName='fa6-solid:van-shuttle' 
              iconWidth={30} iconClass='SUV/Van' onClick={() => setCarType('SUV/Van')} />
            <CarButton 
              iconName='mdi:car-sports' 
              iconWidth={40} iconClass='Semi Luxury' onClick={() => setCarType('Semi Luxury')} />
            <CarButton 
              iconName='mdi:car-convertible' 
              iconWidth={40} iconClass='Luxury Car' onClick={() => setCarType('Luxury Car')} />
          </div>
          <button type='submit' className={styles.submit}>SUBMIT</button>
        </div>
      </form>
    </section>
  )
}

export default FormDrive
