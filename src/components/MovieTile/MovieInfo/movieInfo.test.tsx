import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MovieInfo from 'components/MovieTile/MovieInfo';

describe('MovieInfo', () => {
  const data = {
    id: 'test',
    title: 'test',
    image: 'test',
  };
  const mockFn = jest.fn();

  it('should call onClose method', () => {
    const component = render(
      <MovieInfo
        isVisible
        onClose={mockFn}
        toggleIsFavorite={mockFn}
        isInFavorites
        data={data}
      />,
    );
    const button = component.getByTestId('closeBtn');
    fireEvent.press(button);
    expect(mockFn).toBeCalled();
  });

  it('should call toggleIsFavorite method', () => {
    const component = render(
      <MovieInfo
        isVisible
        onClose={mockFn}
        toggleIsFavorite={mockFn}
        isInFavorites
        data={data}
      />,
    );
    const button = component.getByTestId('toggleBtn');
    fireEvent.press(button);
    expect(mockFn).toBeCalled();
  });
});
