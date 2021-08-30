export const selectMovies = (state: MoviesState): Movie[] => state.data;
export const selectLoadingStatus = (state: MoviesState): boolean =>
  state.loading;
export const selectError = (state: MoviesState): Error | null => state.error;
