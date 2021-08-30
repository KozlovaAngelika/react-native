import { Rotate90DegreesCcw, Store } from '@material-ui/icons';
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
  baseURL: `${API_URL}`,
});

export type State = typeof rootState;

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
