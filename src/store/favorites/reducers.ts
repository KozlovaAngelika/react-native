import * as types from './actionTypes';
import { FavoritesActions } from './types';

const initialState = {
  data: [],
};

const favoritesReducer = (state: FavoritesState = initialState, action: FavoritesActions): FavoritesState => {
  switch (action.type) {
    case types.ADD_MOVIE_TO_FAVORITES:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.REMOVE_MOVIE_FROM_FAVORITES:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
