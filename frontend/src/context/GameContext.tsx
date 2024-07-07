import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { GameContextProps, WordData } from '../types/game'
import { getWord } from '../services/gameService';


const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [points, setPoints] = useState(10);
  const [wordData, setWordData] = useState<Pick<WordData, 'word' | 'firstLetter' | 'length' | 'translation'>>({
    word: '',
    firstLetter: '',
    length: 0,
    translation: ''
  });
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setGameOver(points <= 0 || points >= 20);
  }, [points]);

  const fetchWord = useCallback(async () => {
    const { word, firstLetter, length, translation } = await getWord();
    setWordData({ word, firstLetter, length, translation });
  }, []);

  useEffect(() => {
    fetchWord();
  }, [fetchWord]);

  const checkTranslation = (input: string): boolean => {
    if (input.toLowerCase() === wordData.translation.toLowerCase()) {
      setPoints(prevPoints => prevPoints + 1);
      setMessage('Correct!');
      fetchWord();
      return true;
    } else {
      setPoints(prevPoints => prevPoints - 1);
      setMessage('Incorrect!');
      fetchWord();
      return false;
    }
  }

  const resetGame = useCallback(() => {
    setPoints(10);
    setGameOver(false);
    fetchWord();
  }, [fetchWord]);

  return (
    <GameContext.Provider value={{ points, setPoints, wordData, checkTranslation, gameOver, resetGame, message, setMessage }}>
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
