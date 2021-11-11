import {
  GET_MOVIE_INFO_STARTED,
  GET_MOVIE_INFO_SUCCESS,
  GET_MOVIE_INFO_FAIL,
  CLEAR_MOVIE_INFO,
} from './actionTypes';

export interface GetMovieInfo {
  type: typeof GET_MOVIE_INFO_STARTED;
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

export type MovieInfoActions =
  | GetMovieInfo
  | ClearMovieInfo
  | GetMovieInfoSuccess
  | GetMovieInfoFail;
