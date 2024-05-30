import React, { useRef, useState, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import styles from "../../styles/StylesBooking/FormBooking.module.css";
import { IoCloseSharp } from "react-icons/io5";

const FormBooking = () => {
  const [ip, setIp] = useState<string | null>(null);

  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [error, setError] = useState(false);

  const currentLocationRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);
  const [isCurrentFocused, setIsCurrentFocused] = useState<boolean>(false);
  const [isDestinationFocused, setIsDestinationFocused] =
    useState<boolean>(false);

  const handleCurrentFocus = () => {
    setIsCurrentFocused(true);
  };
  const handleCurrentBlur = () => {
    setIsCurrentFocused(false);
  };
  const handleDestinationFocus = () => {
    setIsDestinationFocused(true);
  };
  const handleDestinationBlur = () => {
    setIsDestinationFocused(false);
  };

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("/api/get-ip");
        const data = await response.json();
        setIp(data.ip);

        const locationRes = await fetch(`/api/get-location?ip=${data.ip}`);
        const locationData = await locationRes.json();
        setCurrentLocation(locationData.city);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchIp();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (currentLocation.trim() === "" || destination.trim() === "") {
      setError(true);
      if (currentLocation.trim() === "" && currentLocationRef.current) {
        currentLocationRef.current.focus();
      } else if (destination.trim() === "" && destinationRef.current) {
        destinationRef.current.focus();
      }
    } else {
      setError(false);
      window.location.href = "/not-found";
    }
  };

  const handleRemoveCurrentLoc = () => {
    setCurrentLocation("");
  };

  const handleRemoveDestination = () => {
    setDestination("");
  };

  return (
    <div className={styles.formBox}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.formP}> Find a ride now </p>
        <div className={styles.divForm}>
          <label
            id="labelCurrent"
            className={styles.text}
            htmlFor="currentLocation"
          >
            {" "}
            <span
              className={
                isCurrentFocused ? styles.focusedSpan : styles.textSpan
              }
            >
              Your Pickup:
            </span>{" "}
          </label>
          <div className={styles.divInput}>
            <input
              className={styles.input}
              id="currentLocation"
              type="text"
              placeholder="Current location"
              name="currentLocation"
              ref={currentLocationRef}
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              onFocus={handleCurrentFocus}
              onBlur={handleCurrentBlur}
            />
            <IoCloseSharp
              style={{ cursor: "pointer" }}
              onClick={handleRemoveCurrentLoc}
              className={styles.svg1}
            />
          </div>
          <label
            id="labelDestination"
            className={styles.text}
            htmlFor="yourDestination"
          >
            {" "}
            <span
              className={
                isDestinationFocused ? styles.focusedSpan : styles.textSpan
              }
            >
              Your Destination:
            </span>
          </label>
          <div className={styles.divInput}>
            <input
              className={styles.input}
              id="destination"
              type="text"
              placeholder="Your Destination"
              name="yourDestination"
              ref={destinationRef}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onFocus={handleDestinationFocus}
              onBlur={handleDestinationBlur}
            />
            <IoCloseSharp
              style={{ cursor: "pointer" }}
              onClick={handleRemoveDestination}
              className={styles.svg2}
            />
          </div>
        </div>
        {error && <ErrorMessage message="Os campos são obrigatórios." />}
        <div className={styles.find}>
          <button type="submit">
            <img
              src="https://challengexiienzogois.s3.us-east-2.amazonaws.com/icon.svg"
              alt=""
            />
            FIND A DRIVER
          </button>
          <p>MORE OPTIONS</p>
        </div>
      </form>
    </div>
  );
};

export default FormBooking;
