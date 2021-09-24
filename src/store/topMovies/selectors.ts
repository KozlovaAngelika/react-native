/* eslint-disable arrow-body-style */
import { RootState } from 'store';

export const selectTopMovies = (state: RootState): Movie[] => {
  return state.topMovies.data;
};

export const selectLoadingStatus = (state: RootState): boolean => {
  return state.topMovies.loading;
};

export const selectError = (state: RootState): Error | null => {
  return state.topMovies.error;
};
