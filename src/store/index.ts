import axios, { AxiosInstance } from 'axios';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from 'react-native-dotenv';
import { createStore, applyMiddleware, combineReducers, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { favoritesReducer } from './favorites/reducers';
import { moviesReducer } from './movies/reducers';
import { topMoviesReducer } from './topMovies/reducers';

const persistConfig = {
  key: 'favorites',
  storage: AsyncStorage,
  blackList: ['movies', 'topMovies'],
  whiteList: ['favorites'],
};

const reducer = combineReducers({
  movies: moviesReducer,
  topMovies: topMoviesReducer,
  favorites: favoritesReducer,
});

const persistedRootReducer = persistReducer(persistConfig, reducer);

const api = axios.create({
  headers: {
    contentType: 'application/json',
  },
  baseURL: API_URL,
});

export type State = ReturnType<typeof rootState.getState>;

export const rootState = createStore(
  persistedRootReducer,
  applyMiddleware(thunk.withExtraArgument(api)),
);

export const persistedState = persistStore(rootState);

export type RootThunkAction<TAction extends Action> = ThunkAction<
  void,
  State,
  AxiosInstance,
  TAction
>;
