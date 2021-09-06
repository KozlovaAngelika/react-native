/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */
import { FavoritesActions } from './types';
import * as types from './actionTypes';

const initialState = {
  data: [],
};

export const favoritesReducer = (
  state: FavoritesState = initialState,
  action: FavoritesActions,
): FavoritesState => {
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
