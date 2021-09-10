import { State } from 'store';

export const selectTopMovies = (state: State): Movie[] | null =>
  state.topMovies.data;
export const selectLoadingStatus = (state: State): boolean =>
  state.topMovies.loading;
export const selectError = (state: State): Error | null =>
  state.topMovies.error;
