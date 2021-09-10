/* eslint-disable import/prefer-default-export */
import { State } from 'store';

export const selectMovies = (state: State): Movie[] => state.favorites.data;
