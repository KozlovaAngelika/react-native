import axios, { AxiosInstance } from 'axios';
import { API_URL } from 'react-native-dotenv';
import { createStore, applyMiddleware, combineReducers, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { moviesReducer } from './movies/reducers';

const reducer = combineReducers({
  movies: moviesReducer,
});

const api = axios.create({
  headers: {
    contentType: 'application/json',
  },
  baseURL: API_URL,
});

export type RootState = ReturnType<typeof rootState.getState>;

export const rootState = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api)),
);

export type RootThunkAction<TAction extends Action> = ThunkAction<
  void,
  RootState,
  AxiosInstance,
  TAction
>;
