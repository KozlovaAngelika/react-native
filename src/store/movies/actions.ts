import * as types from './actionTypes';
import { SearchMovies, SearchMoviesSuccess, SearchMoviesFail, ClearSearchResults } from './types';

export const searchMoviesStarted = (value: string): SearchMovies => ({
  type: types.SEARCH_MOVIES_STARTED,
  payload: value,
});

export const searchMoviesSuccess = (data: Movie[]): SearchMoviesSuccess => ({
  type: types.SEARCH_MOVIES_SUCCESS,
  payload: data,
});

export const searchMoviesFail = (error: Error | null): SearchMoviesFail => ({
  type: types.SEARCH_MOVIES_FAIL,
  payload: error,
});

export const clearSearchResults = (): ClearSearchResults => ({
  type: types.CLEAR_SEARCH_RESULTS,
});
