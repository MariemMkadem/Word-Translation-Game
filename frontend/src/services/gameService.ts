import apiClient from "./apiClient";

export const getWord = async () => {
  const response = await apiClient.get("/word");
  return response.data;
};

export const saveScore = async (playerName: string, points: number) => {
  const response = await apiClient.post("/score", { playerName, points });
  return response.data;
};

export const getLeaderboard = async () => {
  const response = await apiClient.get("/leaderboard");
  return response.data;
};
