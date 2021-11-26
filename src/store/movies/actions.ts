import { API_KEY } from 'react-native-dotenv';
import * as types from './actionTypes';
import { ClearSearchResults, SearchMovies, SearchMoviesActions, SearchMoviesFail, SearchMoviesSuccess } from './types';
import { RootThunkAction } from 'store';

export const searchMoviesStarted = (): SearchMovies => ({
  type: types.SEARCH_MOVIES_STARTED,
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

export const searchMovies = (value: string): RootThunkAction<SearchMoviesActions> => (dispatch, getState, api) => {
  const state = getState();
  const lang = state.appConfig.currentLanguage;
  dispatch(searchMoviesStarted());
  api
    .get<SearchMovieResponse>(`/${lang}/API/SearchMovie/${API_KEY}/${value}`)
    .then(({ data }) => {
      const { errorMessage, results } = data;
      if (errorMessage) {
        const error = new Error(errorMessage);
        dispatch(searchMoviesFail(error));
      } else {
        dispatch(searchMoviesSuccess(results));
      }
    })
    .catch((err) => {
      dispatch(searchMoviesFail(err));
    });
};
