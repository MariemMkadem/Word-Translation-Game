import React from "react";
import styles from "./header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Word Translation Game</h1>
    </header>
  );
};
