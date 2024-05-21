import React from "react";
import styles from "../styles/404.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Custom404: React.FC = () => {
  return (
    <div className={styles.container}>
      <Icon
        className={styles.alert}
        icon="octicon:alert-24"
        style={{ width: 200, height: 200, color: "#FBA403" }}
      />
      <h1 className={styles.text}>404 - Página não encontrada</h1>
      <Link className={styles.homeLink} href="/">
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default Custom404;
