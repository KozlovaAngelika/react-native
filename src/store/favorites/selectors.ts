/* eslint-disable import/prefer-default-export */
import { RootState } from 'store';

export const selectMovies = (state: RootState): Movie[] => state.favorites.data;

export const isFavoriteMovie = (id: string) => (state: RootState): boolean =>
  state.favorites.data.some((movie) => movie.id === id);
