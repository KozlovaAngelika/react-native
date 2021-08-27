export const selectMovies = (state: MoviesState): Movie[] | null => state.data;
export const selectLoadingStatus = (state: MoviesState): boolean =>
  state.loading;
export const selecrError = (state: MoviesState): Error | null => state.error;
