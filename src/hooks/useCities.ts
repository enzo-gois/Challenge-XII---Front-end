import { useEffect, useState } from "react"

interface CitiesProps {
  country: string;
}

export const useCities = ({ country }: CitiesProps) => {

  const [cities, setCities] = useState<string[]>([])

  useEffect(() => {
    if(!country) return

     fetch("http://localhost:3001/cities", { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ country: country }),
    })
      .then((response) => response.json())
      .then((data) => setCities(data.data)) 
  }, [country])

  return { cities }
}