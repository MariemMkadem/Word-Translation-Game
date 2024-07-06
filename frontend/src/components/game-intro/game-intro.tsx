import React from 'react';
import styles from './game-intro.module.scss';

export const GameIntro: React.FC = () => {
  return (
    <section className={styles.intro}>
      <p>Welcome to the Word Translation Game!</p>
      <p>Translate the given French word into English and gain points.</p>
      <p>You start with 10 points. Reach 20 points to win, or fall to 0 points to lose.</p>
    </section>
  );
};

