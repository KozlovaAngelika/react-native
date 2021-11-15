import { AxiosInstance } from 'axios';
import { all } from 'redux-saga/effects';
import { watchSearchMovies } from './movies/sagas';

function* rootSaga(axiosApi: AxiosInstance): Generator {
  yield all([watchSearchMovies(axiosApi)]);
}

export default rootSaga;
