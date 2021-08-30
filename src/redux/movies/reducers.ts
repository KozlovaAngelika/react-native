/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */
// eslint-disable @typescript-eslint/default-param-last
import { Action } from 'redux';
import { SearchMoviesActions } from './types';
import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  data: [],
};
export const moviesReducer = (
  state: MoviesState = initialState,
  action: SearchMoviesActions,
): MoviesState => {
  switch (action.type) {
    case types.SEARCH_MOVIES_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case types.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case types.SEARCH_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};
