import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import routes from './routes/routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);
connectDB();


export default app;