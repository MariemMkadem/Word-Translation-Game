import { Request, Response } from 'express';
import Score from '../models/scoreModel';

export const saveScore = async (req: Request, res: Response) => {
  const { playerName, points } = req.body;
  const newScore = new Score({ playerName, points });
  await newScore.save();
  res.status(201).json(newScore);
};

export const getLeaderboard = async (req: Request, res: Response) => {
  const scores = await Score.find().sort({ points: -1 }).limit(10);
  res.status(200).json(scores);
};
