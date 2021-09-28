import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Favorites from 'screens/Favorites';
import favoritesReducer from './reducers';
import { selectMovies } from './selectors';
import * as types from './actionTypes';

describe('favorites reducer', () => {
  let initialState: FavoritesState = {
    data: [],
  };
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

describe('favorites selectors', () => {
  const state = {
    favorites: {
      data: [
        {
          id: 'firstMovie',
          title: 'test',
          image: 'test',
        },
        {
          id: 'secondMovie',
          title: 'test',
          image: 'test',
        },
        {
          id: 'thirdMovie',
          title: 'test',
          image: 'test',
        },
      ],
    },
  };
  it('should return correct data', () => {
    expect(selectMovies(state)).toEqual(state.favorites.data);
  });
});
