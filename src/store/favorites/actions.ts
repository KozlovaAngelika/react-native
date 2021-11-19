import * as types from './actionTypes';
import { AddMovieToFavorites, RemoveMovieFromFavorites } from './types';

export const addMovieToFavorites = (data: Movie): AddMovieToFavorites => ({
  type: types.ADD_MOVIE_TO_FAVORITES,
  payload: data,
});

export const removeMovieFromFavorites = (id: string): RemoveMovieFromFavorites => ({
  type: types.REMOVE_MOVIE_FROM_FAVORITES,
  payload: id,
});
