import { AxiosInstance, AxiosResponse } from 'axios';
import { API_URL, API_KEY } from 'react-native-dotenv';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getMovieInfoFail, getMovieInfoSuccess } from './actions';
import * as types from './actionTypes';
import { GetMovieInfo } from './types';
import { selectCurrentLanguage } from 'store/movies/selectors';
import api from 'utils/api';

async function getMovieInfo(
  payload: string,
  lang: string,
): Promise<AxiosResponse<GetAdditionalInfoResponse>> {
  return await api.get<GetAdditionalInfoResponse>(
    `${API_URL}/${lang}/API/Title/${API_KEY}/${payload}/Ratings`,
  );
}

export function* getMovieInfoAsync(action: GetMovieInfo) {
  try {
    const lang = yield select(selectCurrentLanguage);
    const response: AxiosResponse<GetAdditionalInfoResponse> = yield call(
      getMovieInfo,
      action.payload,
      lang,
    );
    const { plot, imDbRating, errorMessage } = response.data;
    if (errorMessage) {
      const error = new Error(errorMessage);
      yield put(getMovieInfoFail(error));
    }
    yield put(
      getMovieInfoSuccess({
        plot,
        imDbRating,
      }),
    );
  } catch (err) {
    yield put(getMovieInfoFail(err as Error));
  }
}

export function* watchGetMovieInfo(axiosApi: AxiosInstance): Generator {
  yield takeLatest<GetMovieInfo>(
    types.GET_MOVIE_INFO_STARTED,
    getMovieInfoAsync,
  );
}
