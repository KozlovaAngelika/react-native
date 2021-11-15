import {
  SEARCH_MOVIES_STARTED,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAIL,
  CLEAR_SEARCH_RESULTS,
} from './actionTypes';

export interface SearchMovies {
  type: typeof SEARCH_MOVIES_STARTED;
  payload: string;
}

export interface ClearSearchResults {
  type: typeof CLEAR_SEARCH_RESULTS;
}

export interface SearchMoviesSuccess {
  type: typeof SEARCH_MOVIES_SUCCESS;
  payload: Movie[];
}

export interface SearchMoviesFail {
  type: typeof SEARCH_MOVIES_FAIL;
  payload: Error | null;
}

export type SearchMoviesActions =
  | SearchMovies
  | SearchMoviesSuccess
  | SearchMoviesFail
  | ClearSearchResults;
