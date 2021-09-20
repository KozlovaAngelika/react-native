import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import defaultImg from 'media/defaultImg.png';
import configureMockStore from 'redux-mock-store';
import MovieTile from 'components/MovieTile';
import { Provider } from 'react-redux';
import '@testing-library/jest-native';
import { COLORS } from 'utils/constants';

describe('MovieTile', () => {
  const data = {
    id: 'test',
    title: 'test',
    image: 'test',
  };

  const initialState = {
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
      data: [data],
    },
  };

  const mockStore = configureMockStore();

  const renderComponent = (): any => {
    const store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <MovieTile data={data} />
      </Provider>,
    );
    return { component, store };
  };

  it('should display correct title', () => {
    const { component } = renderComponent();
    expect(component.getByTestId('title')).toHaveTextContent('test');
  });

  it('should display correct image', () => {
    const { component } = renderComponent();

    expect(component.getByTestId('cardImage')).toHaveProp('source', {
      uri: 'test',
    });
  });

  it('should display correct image if image url is empty', () => {
    data.image = '';
    const { component } = renderComponent();
    expect(component.getByTestId('cardImage')).toHaveProp('source', defaultImg);
  });

  it('should call addMovieToFavorites action', () => {
    initialState.favorites = {
      data: [],
    };
    const { component, store } = renderComponent();
    const button = component.getByTestId('toggleIsFavoriteButton');
    fireEvent.press(button);
    const actions = store.getActions();
    expect(actions[0].type).toBe('ADD_MOVIE_TO_FAVORITES');
  });

  it('should call removeMovieFromFavorites action', () => {
    initialState.favorites = {
      data: [data],
    };
    const { component, store } = renderComponent();
    const button = component.getByTestId('toggleIsFavoriteButton');
    fireEvent.press(button);
    const actions = store.getActions();
    expect(actions[0].type).toBe('REMOVE_MOVIE_FROM_FAVORITES');
  });

  it('icon should has correct style if movie is favorite', () => {
    initialState.favorites = {
      data: [data],
    };
    const { component } = renderComponent();
    const icon = component.getByTestId('iconIcon');
    expect(icon).toHaveStyle({ color: COLORS.YELLOW });
  });

  it('icon should has correct style if movie isn`t favorite', () => {
    initialState.favorites = {
      data: [],
    };
    const { component } = renderComponent();
    const icon = component.getByTestId('iconIcon');
    expect(icon).toHaveStyle({ color: COLORS.GREY });
  });
});
