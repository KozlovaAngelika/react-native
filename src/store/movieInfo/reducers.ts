import { MovieInfoActions } from './types';
import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  data: {
    plot: '',
    imDbRating: '',
  },
};

const movieInfoReducer = (
  state: MovieInfoState = initialState,
  action: MovieInfoActions,
): MovieInfoState => {
  switch (action.type) {
    case types.GET_MOVIE_INFO_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
        data: initialState.data,
      };
    case types.GET_MOVIE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case types.GET_MOVIE_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: initialState.data,
      };
    case types.CLEAR_MOVIE_INFO:
      return {
        ...state,
        loading: false,
        error: null,
        data: initialState.data,
      };
    default:
      return state;
  }
};
export default movieInfoReducer;
