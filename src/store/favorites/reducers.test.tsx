import React from 'react';
import favoritesReducer from './reducers';
import * as types from './actionTypes';

let initialState: FavoritesState = {
  data: [],
};

describe('favorites reducer', () => {
  it('ADD_MOVIE_TO_FAVORITES', () => {
    const action = {
      type: types.ADD_MOVIE_TO_FAVORITES,
      payload: {
        id: 'test',
        title: 'test',
        image: 'test',
      },
    };
    expect(favoritesReducer(initialState, action)).toEqual({
      ...initialState,
      data: [action.payload],
    });
  });

  it('REMOVE_MOVIE_TO_FAVORITES', () => {
    const action = {
      type: types.REMOVE_MOVIE_FROM_FAVORITES,
      payload: 'test',
    };
    initialState = {
      data: [
        {
          id: 'test',
          image: 'test',
          title: 'test',
        },
      ],
    };
    expect(favoritesReducer(initialState, action)).toEqual({
      ...initialState,
      data: [],
    });
  });
});
