import { CLEAR_MOVIE_INFO, GET_MOVIE_INFO_FAIL, GET_MOVIE_INFO_STARTED, GET_MOVIE_INFO_SUCCESS } from './actionTypes';

export interface GetMovieInfo {
  type: typeof GET_MOVIE_INFO_STARTED;
  payload: string;
}

export interface ClearMovieInfo {
  type: typeof CLEAR_MOVIE_INFO;
}

export interface GetMovieInfoSuccess {
  type: typeof GET_MOVIE_INFO_SUCCESS;
  payload: GetAdditionalInfoResponse;
}

export interface GetMovieInfoFail {
  type: typeof GET_MOVIE_INFO_FAIL;
  payload: Error | null;
}

export type MovieInfoActions = GetMovieInfo | ClearMovieInfo | GetMovieInfoSuccess | GetMovieInfoFail;
