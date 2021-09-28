import { RootState } from 'store';
import moviesReducer from './reducers';
import * as types from './actionTypes';
import { selectLoadingStatus, selectMovies, selectError } from './selectors';

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

  describe('movies selectors', () => {
    let state: RootState = {
      movies: {
        loading: false,
        error: null,
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
      expect(selectMovies(state)).toEqual(state.movies.data);
    });

    it('should return correct error status', () => {
      state = {
        movies: {
          loading: false,
          error: new Error(),
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
      expect(selectError(state)).toEqual(state.movies.error);
    });

    it('should return correct loading status', () => {
      state = {
        movies: {
          loading: true,
          error: null,
          data: null,
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
      expect(selectLoadingStatus(state)).toEqual(state.movies.loading);
    });
  });
});
