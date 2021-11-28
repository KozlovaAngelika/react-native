import { GET_TOP_MOVIES_FAIL, GET_TOP_MOVIES_STARTED, GET_TOP_MOVIES_SUCCESS } from './actionTypes';

export interface GetTopMovies {
  type: typeof GET_TOP_MOVIES_STARTED;
}

export interface GetTopMoviesSuccess {
  type: typeof GET_TOP_MOVIES_SUCCESS;
  payload: Movie[];
}

export interface GetTopMoviesFail {
  type: typeof GET_TOP_MOVIES_FAIL;
  payload: Error | null;
}

export type GetTopMoviesActions = GetTopMovies | GetTopMoviesSuccess | GetTopMoviesFail;
