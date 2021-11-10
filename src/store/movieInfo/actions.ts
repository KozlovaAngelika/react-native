import { API_KEY, API_URL } from 'react-native-dotenv';
import { RootThunkAction } from 'store';
import * as types from './actionTypes';
import {
  GetMovieInfo,
  ClearMovieInfo,
  GetMovieInfoSuccess,
  GetMovieInfoFail,
  MovieInfoActions,
} from './types';

export const getNovieInfoStarted = (): GetMovieInfo => ({
  type: types.GET_MOVIE_INFO_STARTED,
});

export const getMovieInfoSuccess = (
  data: GetAdditionalInfoResponse,
): GetMovieInfoSuccess => ({
  type: types.GET_MOVIE_INFO_SUCCESS,
  payload: data,
});

export const getMovieInfoFail = (error: Error | null): GetMovieInfoFail => ({
  type: types.GET_MOVIE_INFO_FAIL,
  payload: error,
});

export const clearMovieInfo = (): ClearMovieInfo => ({
  type: types.CLEAR_MOVIE_INFO,
});

export const getMovieInfo = (id: string): RootThunkAction<MovieInfoActions> => (
  dispatch,
  getState,
  api,
) => {
  dispatch(getNovieInfoStarted);
  api
    .get<GetAdditionalInfoResponse>(`${API_URL}/Title/${API_KEY}/${id}/Ratings`)
    .then(({ data }) => {
      const { plot, imDbRating, errorMessage } = data;
      if (errorMessage) {
        const error = new Error(errorMessage);
        dispatch(getMovieInfoFail(error));
      } else {
        dispatch(
          getMovieInfoSuccess({
            plot,
            imDbRating,
          }),
        );
      }
    })
    .catch((err) => {
      dispatch(getMovieInfoFail(err));
    });
};
