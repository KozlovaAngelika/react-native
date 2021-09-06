/* eslint-disable import/prefer-default-export */
import { State } from '..';

export const selectMovies = (state: State): Movie[] => state.favorites.data;
