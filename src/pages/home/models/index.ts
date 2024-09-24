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
export type { TMealResponse, TMovieListResponse, MovieList };
