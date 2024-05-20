import React from "react";
import styles from "./CarButton.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import CarButtonProps from "../interfaces/CarButtonProps";

const CarButton: React.FC<CarButtonProps> = ({
  iconName,
  iconWidth,
  iconClass,
  onClick,
  isSelected,
}) => {
  return (
    <button
      type="button"
      className={`${styles.buttonCar} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      <Icon
        icon={iconName}
        style={{
          color: isSelected ? "#FBA403" : "#FFF",
          height: 40,
          width: iconWidth,
        }}
      />
      <span>{iconClass}</span>
    </button>
  );
};

export default CarButton;
