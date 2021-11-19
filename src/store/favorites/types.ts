import { ADD_MOVIE_TO_FAVORITES, REMOVE_MOVIE_FROM_FAVORITES } from './actionTypes';

export interface AddMovieToFavorites {
  type: typeof ADD_MOVIE_TO_FAVORITES;
  payload: Movie;
}

export interface RemoveMovieFromFavorites {
  type: typeof REMOVE_MOVIE_FROM_FAVORITES;
  payload: string;
}

export type FavoritesActions = AddMovieToFavorites | RemoveMovieFromFavorites;
