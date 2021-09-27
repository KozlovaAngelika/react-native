import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import Home from 'screens/Home';
import configureMockStore from 'redux-mock-store';
import moviesReducer from './reducers';
import * as types from './actionTypes';
import { RootState } from '..';

describe('movies reducer', () => {
  const initialState: MoviesState = {
    loading: false,
    error: null,
    data: [],
  };

  it('SEARCH_MOVIES_STARTED', () => {
    const action = {
      type: types.SEARCH_MOVIES_STARTED,
      payload: 'test',
    };
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
      error: null,
      data: null,
    });
  });

  it('SEARCH_MOVIES_SUCCESS', () => {
    const action = {
      type: types.SEARCH_MOVIES_SUCCESS,
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

  it('SEARCH_MOVIES_FAIL', () => {
    const action = {
      type: types.SEARCH_MOVIES_FAIL,
      payload: 'error',
    };
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      error: action.payload,
      data: null,
    });
  });

  it('CLEAR_SEARCH_RESULTS', () => {
    const action = {
      type: types.CLEAR_SEARCH_RESULTS,
    };
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      error: null,
      data: null,
    });
  });
});

describe('movies selectors', () => {
  const initialState = {
    movies: {
      data: [
        {
          id: 'firstMovie',
          title: 'test',
          image: 'test',
        },
      ],
    },
    favorites: [],
  };
});
