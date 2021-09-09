import { Reducer } from 'react';
import { SearchMoviesActions } from './types';
import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const moviesReducer = (
  state: MoviesState = initialState,
  action: SearchMoviesActions,
): MoviesState => {
  switch (action.type) {
    case types.SEARCH_MOVIES_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
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
        data: null,
      };
    case types.CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        loading: false,
        error: null,
        data: null,
      };
    default:
      return state;
  }
};
export default moviesReducer;
