import * as types from './actionTypes';
import { GetTopMovies, GetTopMoviesSuccess, GetTopMoviesFail } from './types';

export const getTopMoviesStarted = (): GetTopMovies => ({
  type: types.GET_TOP_MOVIES_STARTED,
});

export const getTopMoviesSuccess = (data: Movie[]): GetTopMoviesSuccess => ({
  type: types.GET_TOP_MOVIES_SUCCESS,
  payload: data,
});

export const getTopMoviesFail = (error: Error | null): GetTopMoviesFail => ({
  type: types.GET_TOP_MOVIES_FAIL,
  payload: error,
});
