import { useState, useEffect } from 'react';
import { getWord } from '../services/gameService';

interface WordData {
  word: string;
  firstLetter: string;
  length: number;
  translation: string;
}

export const useGame = () => {
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [score, setScore] = useState(10);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchWord();
  }, []);

  const fetchWord = async () => {
    const data = await getWord();
    setWordData(data);
  };

  const checkTranslation = (input: string) => {
    if (wordData) {
      if (input.toLowerCase() === wordData.translation.toLowerCase()) {
        setScore(score + 1);
        setMessage('Correct!');
      } else {
        setScore(score - 1);
        setMessage('Incorrect!');
      }
      fetchWord();
    }
  };

  return { wordData, score, message, checkTranslation, setMessage, setScore };
};
