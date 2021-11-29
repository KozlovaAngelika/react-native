import { RootState } from 'store/rootReducer';

export const selectTopMovies = (state: RootState): Movie[] => state.topMovies.data;

export const selectLoadingStatus = (state: RootState): boolean => state.topMovies.loading;

export const selectError = (state: RootState): Error | null => state.topMovies.error;
