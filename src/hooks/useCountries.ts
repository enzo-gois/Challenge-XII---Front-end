import { useEffect, useState } from "react"

export const useCountries = () => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/countries')
      .then((response) => response.json())
      .then((data) => setCountries(data)) 
  }, [])

  return { countries }
}