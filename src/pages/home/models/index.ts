type TMealResponse = {
  meals: Array<Meal>;
};

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
};

type MovieList = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  // title: "The Crow";
  // video: false;
  vote_average: number;
  vote_count: number;
};
type TMovieListResponse = {
  results: Array<MovieList>;
};

type TCastResponse = {
  cast: Array<CastList>;
};

type CastList = {
  adult: boolean;
  gender: number;
  id: 819;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
};
export type { TMealResponse, TMovieListResponse, MovieList, TCastResponse };
