import { AxiosInstance, AxiosResponse } from 'axios';
import { API_KEY } from 'react-native-dotenv';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getTopMoviesFail, getTopMoviesSuccess } from './actions';
import * as types from './actionTypes';
import { GetTopMovies } from './types';
import selectCurrentLanguage from 'store/config/selectors';
import api from 'utils/api';

async function getTopMovies(lang: string): Promise<AxiosResponse<GetTopMoviesResponse>> {
  return await api.get<GetTopMoviesResponse>(`/${lang}/API/Top250Movies/${API_KEY}`);
}

export function* getTopMoviesAsync(action: GetTopMovies) {
  try {
    const lang = yield select(selectCurrentLanguage);
    const response: AxiosResponse<GetTopMoviesResponse> = yield call(getTopMovies, lang);
    const { items, errorMessage } = response.data;
    if (errorMessage) {
      console.log(errorMessage);
      const error = new Error(errorMessage);
      yield put(getTopMoviesFail(error));
    } else {
      yield put(getTopMoviesSuccess(items));
    }
  } catch (err) {
    console.log(err);
    yield put(getTopMoviesFail(err as Error));
  }
}

export function* watchGetTopMovies(axiosApi: AxiosInstance): Generator {
  yield takeEvery<GetTopMovies>(types.GET_TOP_MOVIES_STARTED, getTopMoviesAsync);
}
