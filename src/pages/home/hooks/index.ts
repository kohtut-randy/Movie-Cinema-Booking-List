import { useQuery } from "@tanstack/react-query";
import {
  getMovieList,
  getMealsByFirstLetter,
  getMoviePopularList,
  getMovieListByid,
  getMovieCastList,
} from "../services";
import {
  MovieList,
  TCastResponse,
  TMealResponse,
  TMovieListResponse,
} from "../models";

export const useGetMealsByFirstLetter = (letter: string) => {
  return useQuery<TMealResponse>({
    queryKey: ["meals", "first_letter", letter],
    queryFn: async () => {
      return getMealsByFirstLetter(letter);
    },
  });
};

export const useGetMovieList = () => {
  return useQuery<TMovieListResponse>({
    queryKey: ["list"],
    queryFn: async () => {
      return getMovieList();
    },
  });
};
export const useGetMoviePopularList = () => {
  return useQuery<TMovieListResponse>({
    queryKey: ["popular"],
    queryFn: async () => {
      return getMoviePopularList();
    },
  });
};

export const useGetMovieDetail = (id?: string) => {
  return useQuery<MovieList>({
    queryKey: ["Byid", id],
    queryFn: async () => {
      return getMovieListByid(id ?? "");
    },
  });
};

export const useGetMovieCast = (id?: string) => {
  return useQuery<TCastResponse>({
    queryKey: ["Cast", id],
    queryFn: async () => {
      return getMovieCastList(id ?? "");
    },
  });
};
