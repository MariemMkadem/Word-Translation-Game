import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import styles from './game-input.module.scss';

export const Game: React.FC = () => {
  const { wordData, points, message, checkTranslation, gameOver } = useGame();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkTranslation(input);
    setInput('');
  };

  if (!wordData.word) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <p className={styles.info}>French Word: {wordData.word}</p>
      <p className={styles.info}>Hint: {wordData.firstLetter} ({wordData.length} letters)</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter translation"
        />
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      <p className={styles.score}>Score: {points}</p>
      <p className={`${styles.message} ${points <= 0 ? `${styles.lost}` : ''} ${points >= 20 ? `${styles.won}` : ''}`}>
        {message}
      </p>
      {points <= 0 && <p className={styles.lost}>You lost!</p>}
      {points >= 20 && <p className={styles.won}>You won!</p>}
    </div>
  );
};

