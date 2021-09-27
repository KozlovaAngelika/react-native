import React from 'react';
import moviesReducer from './reducers';
import * as types from './actionTypes';

const initialState: TopMovieState = {
  loading: false,
  error: null,
  data: [],
};

describe('top movies reducers', () => {
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
});
