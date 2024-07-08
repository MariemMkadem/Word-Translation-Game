import React, { useState, useEffect } from "react";
import { getLeaderboard } from "../../services/gameService";
import styles from "./leaderboard.module.scss";

export const Leaderboard: React.FC = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const data = await getLeaderboard();
      setScores(data);
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Leaderboard</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={score?._id}>
              <td>{index + 1}</td>
              <td>{score?.playerName}</td>
              <td>{score?.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
