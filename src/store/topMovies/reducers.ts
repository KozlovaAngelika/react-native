/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */
import { GetTopMoviesActions } from './types';
import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  data: [],
};
export const topMoviesReducer = (
  state: TopMovieState = initialState,
  action: GetTopMoviesActions,
): TopMovieState => {
  switch (action.type) {
    case types.GET_TOP_MOVIES_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case types.GET_TOP_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case types.GET_TOP_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
  return state;
};
