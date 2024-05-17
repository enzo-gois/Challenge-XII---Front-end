import React, { useRef, useState } from 'react'
import ErrorMessage from '../components/ErrorMessage';
import styles from './FormBooking.module.css'
import LocationComponent from './Location';

const FormBooking = () => {

  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [error, setError] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  const currentLocationRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);

  const handleAddressRetrieved = (address: string) => {
    setCurrentLocation(address);
  };

  const handleLocationError = (error: string) => {
    setLocationError(error);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (currentLocation.trim() === '' || destination.trim() === '') {
      setError(true);
      if (currentLocation.trim() === '' && currentLocationRef.current) {
        currentLocationRef.current.focus();
      } else if (destination.trim() === '' && destinationRef.current) {
        destinationRef.current.focus();
      }
    } else {
      setError(false);
      window.location.href = "http://localhost:3000/not-found"
    }
  };

  return (
    <div className={styles.formBox}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.formP}>Find a ride now</p>
        <label className={styles.text} htmlFor="currentLocation"> <span>Your Pickup:</span> </label>
        <input 
          className={styles.input} 
          id="currentLocation" 
          type="text" 
          placeholder="Current location" 
          name="currentLocation" 
          ref={currentLocationRef}
          value={currentLocation}
          onChange={(e) => setCurrentLocation(e.target.value)}
        />
        <label className={styles.text} htmlFor="yourDestination"> <span>Your Destination:</span></label>
        <input 
          className={styles.input} 
          id="destination"
          type="text" 
          placeholder="Your Destination" 
          name="yourDestination" 
          ref={destinationRef}
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        {error && (
          <ErrorMessage message = "Os campos são obrigatórios." />
        )}
        {locationError && (
          <div className={styles.containerError}>
            <img src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/image+24.svg" alt="" width={16} height={16} /> 
            <p className={styles.error}>{locationError}</p>
          </div>
        )}
        <div className={styles.find}>
          <button type="submit">
            <img src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/icon.svg" alt="" />
            FIND A DRIVER
          </button>
          <p>MORE OPTIONS</p>
        </div>
      </form>
      <LocationComponent onAddressRetrieved={handleAddressRetrieved} onError={handleLocationError} />
    </div>
  )
}

export default FormBooking
