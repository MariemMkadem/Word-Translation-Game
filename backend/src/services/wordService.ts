import fs from 'fs';
import path from 'path';
import { fetchTranslation } from '../utils/apiClient';

const verbs = fs.readFileSync(path.resolve(__dirname, '../../data/verbs.txt'), 'utf-8').split('\n');

export const getRandomWord = (): string => {
  return verbs[Math.floor(Math.random() * verbs.length)];
};

export const getTranslation = async (word: string): Promise<string> => {
  return await fetchTranslation(word);
};
