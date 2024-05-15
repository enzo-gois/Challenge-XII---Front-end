// components/LocationComponent.tsx
import React, { useState, useEffect } from 'react';

interface Location {
  latitude: number | null;
  longitude: number | null;
}

interface LocationComponentProps {
  onAddressRetrieved: (address: string) => void;
  onError: (error: string) => void;
}

const LocationComponent: React.FC<LocationComponentProps> = ({ onAddressRetrieved, onError }) => {
  const [location, setLocation] = useState<Location>({ latitude: null, longitude: null });

  useEffect(() => {
    if (!navigator.geolocation) {
      onError('Geolocation is not supported by your browser');
      return;
    }

    const success = async (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });

      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();
        if (data && data.address) {
          const address = data.address.road || data.address.neighbourhood || 'Address not found';
          onAddressRetrieved(address);
        }
      } catch (error) {
        onError('Não foi possível recuperar o seu endereço');
      }
    };

    const error = () => {
      onError('Não foi possível recuperar sua localização');
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, [onAddressRetrieved, onError]);

  return null;
};

export default LocationComponent;
