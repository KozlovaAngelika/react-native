import { State } from '..';

export const selectMovies = (state: State): Movie[] | null => state.movies.data;
export const selectLoadingStatus = (state: State): boolean =>
  state.movies.loading;
export const selectError = (state: State): Error | null => state.movies.error;
