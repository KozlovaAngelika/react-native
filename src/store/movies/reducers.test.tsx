import React from 'react';
import moviesReducer from './reducers';
import * as types from './actionTypes';

const initialState: MoviesState = {
  loading: false,
  error: null,
  data: [],
};

describe('favorites reducers', () => {
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
