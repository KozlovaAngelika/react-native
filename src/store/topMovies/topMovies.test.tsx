import React from 'react';
import moviesReducer from './reducers';
import * as types from './actionTypes';
import { selectError, selectLoadingStatus, selectTopMovies } from './selectors';

const initialState: TopMovieState = {
  loading: false,
  error: null,
  data: [],
};

describe('top movies reducer', () => {
  it('GET_TOP_MOVIES_STARTED', () => {
    const action = {
      type: types.GET_TOP_MOVIES_STARTED,
    };
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
      error: null,
      data: [],
    });
  });

  it('GET_TOP_MOVIES_SUCCESS', () => {
    const action = {
      type: types.GET_TOP_MOVIES_SUCCESS,
      payload: [
        {
          id: 'test',
          title: 'test',
          image: 'test',
        },
      ],
    };
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      error: null,
      data: action.payload,
    });
  });

  it('GET_TOP_MOVIES_FAIL', () => {
    const action = {
      type: types.GET_TOP_MOVIES_FAIL,
      payload: 'error',
    };
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      error: action.payload,
      data: [],
    });
  });
  describe('top movies selectors', () => {
    let state: RootState = {
      movies: {
        loading: false,
        error: null,
        data: [],
      },
      topMovies: {
        loading: false,
        error: null,
        data: [],
      },
      favorites: {
        data: [],
      },
    };

    it('should return correct data', () => {
      expect(selectTopMovies(state)).toEqual(state.movies.data);
    });

    it('should return correct error status', () => {
      state = {
        movies: {
          loading: false,
          error: null,
          data: null,
        },
        topMovies: {
          loading: false,
          error: new Error(),
          data: [],
        },
        favorites: {
          data: [],
        },
      };
      expect(selectError(state)).toEqual(state.topMovies.error);
    });

    it('should return correct loading status', () => {
      state = {
        movies: {
          loading: false,
          error: null,
          data: null,
        },
        topMovies: {
          loading: true,
          error: null,
          data: [],
        },
        favorites: {
          data: [],
        },
      };
      expect(selectLoadingStatus(state)).toEqual(state.topMovies.loading);
    });
  });
});
