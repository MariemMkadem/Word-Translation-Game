import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { getWord } from '../services/gameService';

interface GameContextProps {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  word: string;
  firstLetter: string;
  wordLength: number;
  checkTranslation: (input: string) => boolean;
  gameOver: boolean;
  resetGame: () => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [points, setPoints] = useState(10);
  const [word, setWord] = useState('');
  const [firstLetter, setFirstLetter] = useState('');
  const [wordLength, setWordLength] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (points <= 0 || points >= 20) {
      setGameOver(true);
    } else {
      setGameOver(false);
    }
  }, [points]);

  useEffect(() => {
    const fetchWord = async () => {
      const { word, firstLetter, length } = await getWord();
      setWord(word);
      setFirstLetter(firstLetter);
      setWordLength(length);
    };
    fetchWord();
  }, []);

  const checkTranslation = (input: string) => {
    if (input.toLowerCase() === word.toLowerCase()) {
      setPoints(points + 1);
      return true;
    } else {
      setPoints(points - 1);
      return false;
    }
  };

  const resetGame = () => {
    setPoints(10);
    setGameOver(false);
  };

  return (
    <GameContext.Provider value={{ points, setPoints, word, firstLetter, wordLength, checkTranslation, gameOver, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
