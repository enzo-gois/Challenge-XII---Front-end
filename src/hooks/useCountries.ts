import { useEffect, useState } from "react";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/countries")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error);
      });
  }, []);

  return { countries, error };
};
