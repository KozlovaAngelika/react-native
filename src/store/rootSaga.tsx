import { AxiosInstance } from 'axios';
import { all } from 'redux-saga/effects';
import { watchSearchMovies } from './movies/sagas';
import { watchGetTopMovies } from './topMovies/sagas';

function* rootSaga(axiosApi: AxiosInstance): Generator {
  yield all([watchSearchMovies(axiosApi), watchGetTopMovies(axiosApi)]);
}

export default rootSaga;
