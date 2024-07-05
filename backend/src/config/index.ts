import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const MYMEMORY_API_URL = process.env.MYMEMORY_API_URL || 'https://api.mymemory.translated.net/get';
