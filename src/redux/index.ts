import { createStore } from 'redux';

const initialState: MovieState = {
  movies: [],
  top250: [],
  favorites: [],
};

const reducer = (
  state: MovieState = initialState,
) : MovieState => state;

const state = createStore(reducer, initialState);

export default state;
