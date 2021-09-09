import { GetTopMoviesActions } from './types';
import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  data: [],
};
const topMoviesReducer = (
  state: TopMovieState = initialState,
  action: GetTopMoviesActions,
): TopMovieState => {
  switch (action.type) {
    case types.GET_TOP_MOVIES_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
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
        data: [],
      };
    default:
      return state;
  }
};
export default topMoviesReducer;
