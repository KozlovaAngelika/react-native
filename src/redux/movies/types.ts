import {
  SEARCH_MOVIES_STARTED,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAIL,
} from './actionTypes';

export interface SearchMovies {
  type: typeof SEARCH_MOVIES_STARTED;
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
  | SearchMoviesFail;
