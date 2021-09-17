import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import MovieInfo from 'components/MovieTile/MovieInfo';
import { COLORS } from 'utils/constants';
import { useTranslation } from 'react-i18next';

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

  it('overlay should has isVisible true', () => {
    const component = render(
      <MovieInfo
        isVisible
        onClose={mockFn}
        toggleIsFavorite={mockFn}
        isInFavorites
        data={data}
      />,
    );
    const overlay = component.getByTestId('overlay').props.visible;

    expect(overlay).toBe(true);
  });

  it('button should be green if movie isn`t favorite', () => {
    const component = render(
      <MovieInfo
        isVisible
        onClose={mockFn}
        toggleIsFavorite={mockFn}
        isInFavorites={false}
        data={data}
      />,
    );
    const buttonColor = component.getByTestId('toggleBtn').props.children[0]
      .props.style.backgroundColor;
    expect(buttonColor).toBe(COLORS.GREEN);
  });

  it('button should be red if movie is favorite', () => {
    const component = render(
      <MovieInfo
        isVisible
        onClose={mockFn}
        toggleIsFavorite={mockFn}
        isInFavorites
        data={data}
      />,
    );
    const buttonColor = component.getByTestId('toggleBtn').props.children[0]
      .props.style.backgroundColor;
    expect(buttonColor).toBe(COLORS.RED_DARK);
  });

  it('button should has correct text if movie is favorite ', () => {
    const { t } = useTranslation();
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
    const text = t('removeFromFavorites');
    expect(button).toHaveTextContent(text);
  });

  it('button should has correct text if movie isn`t favorite', () => {
    const { t } = useTranslation();
    const component = render(
      <MovieInfo
        isVisible
        onClose={mockFn}
        toggleIsFavorite={mockFn}
        isInFavorites={false}
        data={data}
      />,
    );
    const button = component.getByTestId('toggleBtn');
    const text = t('addToFavorites');
    expect(button).toHaveTextContent(text);
  });
});
