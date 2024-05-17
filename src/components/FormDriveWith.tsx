import React, { useState } from 'react'
import { useCountries } from '@/hooks/useCountries'
import { useCities } from '@/hooks/useCities'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import FormDataProps from '@/interfaces/FormDataProps'

import CarButton from './CarButton'
import styles from './FormDriveWith.module.css'
import ErrorMessage from './ErrorMessage'

const schema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  selectedCountry: z.string().trim().min(1),
  selectedCity: z.string().trim().min(1),
  referralCode: z.string().optional(),
  driveOwnCar: z.boolean(),
  carType: z.string().trim().min(1)
})

const FormDriveWith = () => {

  const { countries } = useCountries()
  const [selectedCountry, setSelectedCountry] = useState('')
  const { cities } = useCities({country: selectedCountry})
  
  const { handleSubmit, register, setValue, formState: {errors} } = useForm<FormDataProps>({
    resolver: zodResolver(schema),
  })

  const handleStateUpdate = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedCountry(event.target.value)
  }

  const handleCarTypeChange = (type: any) => {
    setValue('carType', type);
  };
  
  const handleSubmitForm = async (data: FormDataProps) => {
    
    const dataProps = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      country: data.selectedCountry,
      city: data.selectedCity,
      referral_code: data.referralCode ?? null,
      own_car: data.driveOwnCar,
      car_type: data.carType,
    };

    try {
      const response = await fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataProps),
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
    <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
      <div className={styles.formDiv}>
        <div className={styles.formDivNames}>
          <input 
            {... register('firstName')}
            className={styles.inputFNome} 
            type="text" 
            placeholder='First Name'
          />
          {errors.firstName && <ErrorMessage message= 'Invalid Name' /> }
        </div>
        <div className={styles.formDivNames}>
          <input 
            {... register('lastName')}
            className={styles.inputLNome} 
            type="text" 
            placeholder='Last Name'
          />
          {errors.lastName && <ErrorMessage message= 'Invalid Last Name' /> }
        </div>
      </div>
      <div className={styles.formDiv1}>
        <input 
          {... register('email')}
          className={styles.input} 
          type="email" 
          placeholder='Email Adress'
        />
        {errors.email && <ErrorMessage message= 'Invalid E-mail' /> }
        <label className={styles.labelCountry}>Country:</label>
        <select 
          {...register('selectedCountry')}
          className={styles.select} 
          value={selectedCountry} 
          onChange={handleStateUpdate} 
        >
          <option className={styles.option} value="" disabled >Country</option>
          {countries.map(country => (
            <option value={country}>{country}</option>
          ))}
        </select>
        {errors.selectedCountry && <ErrorMessage message= 'Select a Country' /> }
        <select 
          {...register('selectedCity')}
          className={styles.select} 
        >
          <option className={styles.option} value="" disabled >City</option>
          {cities && cities.map(city => (
            <option value={city}>{city}</option>
          ))}
        </select>
        {errors.selectedCity && <ErrorMessage message= 'Select a City' /> }
        <input 
          {... register('referralCode')}
          className={styles.input} 
          type="text" 
          placeholder='Referral Code'
        />
      </div>
      <div style={{marginLeft: 30}}>
        <div className={styles.checkBox}>
          <label className={styles.label}>I drive my own car</label>
          <div className={styles.container}>
            <input
              {...register('driveOwnCar')} 
              type="checkbox" 
              id="check" 
            />
            <label htmlFor="check" className={styles.button}></label>
          </div>
        </div>
        <p className={styles.carType}>Select you car type</p>
        <div className={styles.SelectCarTypes}>
          <CarButton 
            iconName='fa6-solid:car-side' iconWidth={30} iconClass='Sedan' onClick={() => handleCarTypeChange('Sedan')} 
          />
          <CarButton 
            iconName='fa6-solid:van-shuttle' iconWidth={30} iconClass='SUV/Van' onClick={() => handleCarTypeChange('SUV/Van')} 
          />
          <CarButton 
            iconName='mdi:car-sports'  iconWidth={40} iconClass='Semi Luxury' onClick={() => handleCarTypeChange('Semi Luxury')} 
          />
          <CarButton 
            iconName='mdi:car-convertible' iconWidth={40} iconClass='Luxury Car' onClick={() => handleCarTypeChange('Luxury Car')} 
          />
        </div>
        {errors.carType && <ErrorMessage message= 'Select a Vehicle Type' />}
        <button type='submit' className={styles.submit}>SUBMIT</button>
      </div>
    </form>
  )
}

export default FormDriveWith
