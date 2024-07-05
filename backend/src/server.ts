import dotenv from 'dotenv';
import app from './app';
import { PORT } from './config';
import { log } from './utils/logger';

dotenv.config();

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`);
});