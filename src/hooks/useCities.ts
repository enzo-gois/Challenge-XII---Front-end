import { useEffect, useState } from "react";

interface CitiesProps {
  country: string;
}

export const useCities = ({ country }: CitiesProps) => {
  const [cities, setCities] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!country) return;

    setLoading(true);

    fetch("http://localhost:3001/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country: country }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCities(data.data);
        setLoading(false);
      });
  }, [country]);

  return { cities, loading };
};
