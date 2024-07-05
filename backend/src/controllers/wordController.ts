import { Request, Response } from 'express';
import { getRandomWord, getTranslation } from '../services/wordService';

export const getWord = async (req: Request, res: Response) => {
  try {
    const word = getRandomWord();
    const translation = await getTranslation(word);
    res.json({ word, translation, firstLetter: translation[0], length: translation.length });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching translation' });
  }
};
