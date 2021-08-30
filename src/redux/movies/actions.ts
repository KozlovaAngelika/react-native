import { AxiosInstance, AxiosResponse } from 'axios';
import { API_KEY } from 'react-native-dotenv';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootThunkAction } from '..';
import * as types from './actionTypes';
import {
  SearchMovies,
  SearchMoviesSuccess,
  SearchMoviesFail,
  SearchMoviesActions,
} from './types';

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
export const searchMovies = (
  value: string,
): RootThunkAction<SearchMoviesActions> => (dispatch, getState, api) => {
  dispatch(searchMoviesStarted());
  api
    .get<SearchMovieResponse>(`SearchAll/${API_KEY}/${value}`)
    .then((res) => {
      const { errorMessage, results } = res.data;
      if (errorMessage.length > 0) {
        const error = new Error(res.data.errorMessage);
        dispatch(searchMoviesFail(error));
      } else {
        dispatch(searchMoviesSuccess(results));
      }
    })
    .catch((err) => {
      dispatch(searchMoviesFail(err));
    });
};
