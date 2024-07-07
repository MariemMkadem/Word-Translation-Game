import { Router } from 'express';
import { getWord } from '../controllers/wordController';
import { saveScore, getLeaderboard } from '../controllers/scoreController';


const router = Router();

router.get('/word', getWord);
router.post('/score', saveScore);
router.get('/leaderboard', getLeaderboard);

export default router;
