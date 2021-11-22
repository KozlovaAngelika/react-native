import { RootState } from 'store';

export const selectMovies = (state: RootState): Movie[] | null => state.movies.data;

export const selectLoadingStatus = (state: RootState): boolean => state.movies.loading;

export const selectError = (state: RootState): Error | null => state.movies.error;
