import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../interfaces/Card";
import styles from "../styles/CardListSection.module.css";
import CardItem from "@/components/CardItem";

const CardListSection = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/cards")
      .then((response) => {
        setCards(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>WHY SHOULD YOU RIDE WITH US?</h1>
      <h2 className={styles.h2}>Best in class rides</h2>
      <div className={styles.cards}>
        {cards.map((card) => (
          <CardItem
            key={card.id}
            imagem_url={card.imagem_url}
            clase={card.class}
            descricao={card.descricao}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
};

export default CardListSection;
