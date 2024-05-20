import React from "react";
import CardItemProps from "@/interfaces/CardItemProps";
import styles from "../components/CardItem.module.css";

const CardItem: React.FC<CardItemProps> = ({
  imagem_url,
  clase,
  descricao,
  link,
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imagem_url} alt="" />
      <div className={styles.containerText}>
        <p className={styles.name}>{clase}</p>
        <span className={styles.description}>{descricao}</span>
      </div>
      <div className={styles.containerLink}>
        <a className={styles.link} href={link}>
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default CardItem;
