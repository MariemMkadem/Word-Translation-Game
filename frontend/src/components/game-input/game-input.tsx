import React, { useState } from 'react';
import { useGame } from '../../hooks/useGame';
import styles from "./game-input.module.scss";

export const Game: React.FC = () => {
  const { wordData, score, message, checkTranslation } = useGame();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkTranslation(input);
    setInput('');
  };

  if (!wordData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1  className={styles.title}>Word Translation Game</h1>
      <p  className={styles.info}>French Word: {wordData.word}</p>
      <p  className={styles.info}>Hint: {wordData.firstLetter} ({wordData.length} letters)</p>
      <form  className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter translation"
        />
        <button type="submit"  className={styles.button}>Submit</button>
      </form>
      <p  className={styles.score}>Score: {score}</p>
      <p className={`${styles.message} ${score <= 0 ? `${styles.lost}` : ''} ${score >= 20 ? 'game-won' : ''}`}>
        {message}
      </p>
      {score <= 0 && <p className={styles.lost}>You lost!</p>}
      {score >= 20 && <p className={styles.win}>You won!</p>}
    </div>
  );
};


