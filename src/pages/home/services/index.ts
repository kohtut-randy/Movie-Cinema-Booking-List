import apiClient from "../../../api/apiClient";

export const getMealsByFirstLetter = async (letter: string) => {
  return await apiClient("get", `/search.php?f=${letter}`);
};

export const getMovieList = async () => {
  return await apiClient("get", `/movie/upcoming?language=en-US&page=1`);
};

export const getMovieListByid = async (id: string) => {
  return await apiClient("get", `/movie/${id}language=en-US&page=1`);
};

export const getMoviePopularList = async () => {
  return await apiClient("get", `/movie/popular?language=en-US&page=1`);
};

export const getMovieCastList = async (id: string) => {
  return await apiClient("get", `/movie/${id}/credits?language=en-US&page=1`);
};
export const getMovieVideo = async (id: string) => {
  return await apiClient(
    "get",
    `/movie/${id}/videos?append_to_response=videos,credits,release_dates`
  );
};
