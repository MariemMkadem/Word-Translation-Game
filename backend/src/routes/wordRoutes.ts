import { Router } from 'express';
import { getWord } from '../controllers/wordController';

const router = Router();

router.get('/word', getWord);

export default router;
