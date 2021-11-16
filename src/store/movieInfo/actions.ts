import * as types from './actionTypes';
import {
  GetMovieInfo,
  ClearMovieInfo,
  GetMovieInfoSuccess,
  GetMovieInfoFail,
} from './types';

export const getMovieInfoStarted = (id: string): GetMovieInfo => ({
  payload: id,
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
