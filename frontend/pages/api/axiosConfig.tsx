import axios from 'axios';

export const baseURL = `http://${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`;

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;