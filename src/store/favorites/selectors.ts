/* eslint-disable arrow-body-style */
import { RootState } from 'store';

export const selectMovies = (state: RootState): Movie[] => state.favorites.data;

export const isFavoriteMovie = (id: string) => (state: RootState): boolean => {
  return state.favorites.data.some((movie) => movie.id === id);
};
