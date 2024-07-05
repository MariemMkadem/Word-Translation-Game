import axios from 'axios';
import { MYMEMORY_API_URL } from '../config';

const apiClient = axios.create({
  baseURL: MYMEMORY_API_URL,
});

export const fetchTranslation = async (word: string): Promise<string> => {
  try {
    const response = await apiClient.get('', {
      params: {
        q: word,
        langpair: 'fr|en',
      },
    });
    return response.data.responseData.translatedText;
  } catch (error) {
    console.error('Error fetching translation:', error);
    throw new Error('Failed to fetch translation');
  }
};
