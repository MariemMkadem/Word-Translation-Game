import apiClient from "./apiClient";

export const getWord = async () => {
  const response = await apiClient.get("/word");
  return response.data;
};
