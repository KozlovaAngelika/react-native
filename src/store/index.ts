import axios, { AxiosInstance } from 'axios';
import { API_URL } from 'react-native-dotenv';
import { createStore, applyMiddleware, combineReducers, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { moviesReducer } from './movies/reducers';
import { topMoviesReducer } from './topMovies/reducers';

const reducer = combineReducers({
  movies: moviesReducer,
  topMovies: topMoviesReducer,
});

const api = axios.create({
  headers: {
    contentType: 'application/json',
  },
  baseURL: API_URL,
});

export type State = ReturnType<typeof rootState.getState>;

export const rootState = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api)),
);

export type RootThunkAction<TAction extends Action> = ThunkAction<
  void,
  State,
  AxiosInstance,
  TAction
>;
