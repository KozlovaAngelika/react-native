import axios, { AxiosInstance } from 'axios';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from 'react-native-dotenv';
import { createStore, applyMiddleware, combineReducers, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { NativeModules } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
import { favoritesReducer } from './favorites/reducers';
import { moviesReducer } from './movies/reducers';
import { topMoviesReducer } from './topMovies/reducers';

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

const persistConfig = {
  key: 'favorites',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, favoritesReducer);

const reducer = combineReducers({
  movies: moviesReducer,
  topMovies: topMoviesReducer,
  favorites: persistedReducer,
});

const api = axios.create({
  headers: {
    contentType: 'application/json',
  },
  baseURL: API_URL,
});

const addThunk = applyMiddleware(thunk.withExtraArgument(api));
const composedEnhancers = composeWithDevTools(addThunk);

export type State = ReturnType<typeof rootState.getState>;
export type RootState = ReturnType<typeof rootState.getState>;

export const rootState = createStore(reducer, composedEnhancers);

export const persistedState = persistStore(rootState);

export type RootThunkAction<TAction extends Action> = ThunkAction<
  void,
  RootState,
  AxiosInstance,
  TAction
>;
