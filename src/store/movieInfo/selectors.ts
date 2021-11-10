import { RootState } from 'store';

export const selectRating = (state: RootState): string =>
  state.movieInfo.data.imDbRating;
export const selectDescription = (state: RootState): string =>
  state.movieInfo.data.plot;
export const selectLoadingStatus = (state: RootState): boolean =>
  state.movieInfo.loading;
export const selectError = (state: RootState): Error | null =>
  state.movieInfo.error;
