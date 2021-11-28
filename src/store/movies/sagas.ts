import { AxiosInstance, AxiosResponse } from 'axios';
import { API_KEY } from 'react-native-dotenv';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { searchMoviesFail, searchMoviesSuccess } from './actions';
import * as types from './actionTypes';
import { selectCurrentLanguage } from './selectors';
import { SearchMovies } from './types';
import api from 'utils/api';

async function getMovies(
  payload: string,
  lang: string,
): Promise<AxiosResponse<SearchMovieResponse>> {
  return await api.get<SearchMovieResponse>(
    `/${lang}/API/SearchMovie/${API_KEY}/${payload}`,
  );
}

export function* searchMoviesAsync(action: SearchMovies) {
  try {
    const lang = yield select(selectCurrentLanguage);
    const response: AxiosResponse<SearchMovieResponse> = yield call(
      getMovies,
      action.payload,
      lang,
    );
    const { errorMessage, results } = response.data;
    if (errorMessage) {
      const error = new Error(errorMessage);
      yield put(searchMoviesFail(error));
    }
    yield put(searchMoviesSuccess(results));
  } catch (err) {
    yield put(searchMoviesFail(err as Error));
  }
}

export function* watchSearchMovies(axiosApi: AxiosInstance): Generator {
  yield takeLatest<SearchMovies>(
    types.SEARCH_MOVIES_STARTED,
    searchMoviesAsync,
  );
}
