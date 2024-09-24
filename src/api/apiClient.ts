import axios, { AxiosError, isAxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const apiClient = async (
  method: "get" | "post" | "put" | "delete",
  reqUrl: string,
  data?: any
) => {
  try {
    const resp = await axiosInstance({
      method,
      url: reqUrl,
      data,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWUyY2Q5NjE0NTkyNGVhYzZlYTAzZmQxNGVjZGE0ZCIsIm5iZiI6MTcyNzA4NTExMi4xODk3MzcsInN1YiI6IjY2ZjEzODgwNTgzYzU2Y2RiMTI1ZWI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bNQ9p_J9aa_COoleNvPw55a8jL677m3adQtCZzJYN40",
      },
    });
    return resp.data;
  } catch (err) {
    const error = err as AxiosError;
    if (!isAxiosError(error)) return;
    throw error.response?.data;
  }
};

export default apiClient;
