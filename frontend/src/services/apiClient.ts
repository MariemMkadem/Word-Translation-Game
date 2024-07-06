import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust to your backend URL
});

export default apiClient;