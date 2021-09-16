import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import defaultImg from 'media/defaultImg.png';
import configureMockStore from 'redux-mock-store';
import MovieTile from 'components/MovieTile';
import { Provider } from 'react-redux';
import '@testing-library/jest-native';
import { COLORS } from 'utils/constants';

describe('MovieTile', () => {
  const mockFn = jest.fn();

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

  it('should display correct value', () => {
    const component = render(
      <Provider store={mockStore(initialState)}>
        <MovieTile data={data} />
      </Provider>,
    );
    expect(component.getByTestId('title')).toHaveTextContent('test');

    expect(component.getByTestId('cardImage')).toHaveProp('source', {
      uri: 'test',
    });
  });

  it('should display correct value if image url is empty', () => {
    data.image = '';

    const component = render(
      <Provider store={mockStore(initialState)}>
        <MovieTile data={data} />
      </Provider>,
    );

    expect(component.getByTestId('cardImage')).toHaveProp('source', defaultImg);
  });

  it('should call toggleIsFavorite method', () => {
    const toggleIsFavorite = mockFn();

    const component = render(
      <Provider store={mockStore(initialState)}>
        <MovieTile data={data} />
      </Provider>,
    );
    const button = component.getByTestId('toggleIsFavoriteButton');

    fireEvent.press(button);

    expect(mockFn).toBeCalled();
  });

  it('should display correct value if movie is favorite', () => {
    const component = render(
      <Provider store={mockStore(initialState)}>
        <MovieTile data={data} />
      </Provider>,
    );

    const icon = component.getByTestId('iconIcon');

    expect(icon).toHaveStyle({ color: COLORS.YELLOW });
  });

  it('should display correct value if movie it isn`t favorite', () => {
    initialState.favorites = {
      data: [],
    };
    const component = render(
      <Provider store={mockStore(initialState)}>
        <MovieTile data={data} />
      </Provider>,
    );
    const icon = component.getByTestId('iconIcon');
    expect(icon).toHaveStyle({ color: COLORS.GREY });
  });
});
