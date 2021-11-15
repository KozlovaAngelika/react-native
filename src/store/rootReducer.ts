import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import favoritesReducer from './favorites/reducers';
import changeLanguageReducer from './languageSelection/reducers';
import movieInfoReducer from './movieInfo/reducers';
import moviesReducer from './movies/reducers';
import topMoviesReducer from './topMovies/reducers';

const persistConfig = {
  key: 'favorites',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

const rootReducer = combineReducers({
  movies: moviesReducer,
  currentLanguage: changeLanguageReducer,
  topMovies: topMoviesReducer,
  favorites: persistedReducer,
  movieInfo: movieInfoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
