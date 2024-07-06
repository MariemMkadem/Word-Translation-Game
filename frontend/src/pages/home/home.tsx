import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Header} from '../../components/header';
import {GameIntro} from '../../components/game-intro';
import styles from './home.module.scss';

export const Home: React.FC = () => {

  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game');
  };

  return (
    <div className={styles.container}>
      <Header />
      <GameIntro />
      <section className={styles.actions}>
        <button className={styles.startButton}  onClick={handleStartGame}>Start Game</button>
      </section>
    </div>
  );
};


