import express from 'express';
import cors from 'cors';
import wordRoutes from './routes/wordRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', wordRoutes);

export default app;