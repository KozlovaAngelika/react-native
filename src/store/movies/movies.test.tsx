import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import Home from 'screens/Home';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moviesReducer from './reducers';
import * as types from './actionTypes';

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
  const api = {
    get: async () => await Promise.resolve(),
  };
  const mockStore = configureMockStore([thunk.withExtraArgument(api)]);

  let initialState = {
    movies: {
      loading: false,
      error: null,
      data: [
        {
          id: 'firstMovie',
          title: 'test',
          image: 'test',
        },
      ],
    },
    favorites: {
      data: [],
    },
  };

  it('the list of movies should contain the correct number of items', () => {
    const store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const searchBar = component.getByTestId('searchBar');
    fireEvent.changeText(searchBar, 'test');
    const moviesListLength = component.getByTestId('moviesList').props.data
      .length;
    expect(moviesListLength).toEqual(1);
  });

  it('should display loader', () => {
    initialState = {
      movies: {
        loading: true,
        error: null,
        data: [],
      },
      favorites: {
        data: [],
      },
    };
    const store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const searchBar = component.getByTestId('searchBar');
    fireEvent.changeText(searchBar, 'test');
    expect(component.getByTestId('loader')).toBeDefined();
  });
});
