import { AxiosInstance } from 'axios';
import { all } from 'redux-saga/effects';
import { watchGetMovieInfo } from './movieInfo/sagas';
import { watchSearchMovies } from './movies/sagas';
import { watchGetTopMovies } from './topMovies/sagas';

function* rootSaga(axiosApi: AxiosInstance): Generator {
  yield all([
    watchSearchMovies(axiosApi),
    watchGetTopMovies(axiosApi),
    watchGetMovieInfo(axiosApi),
  ]);
}

export default rootSaga;
