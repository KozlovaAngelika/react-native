import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import MovieInfo from 'components/MovieTile/MovieInfo';
import { COLORS } from 'utils/constants';
import { useTranslation } from 'react-i18next';

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    data: { plot: 'test', imDbRating: 'test', errorMessage: null },
  }),
}));

describe('MovieInfo', () => {
  const data = {
    id: 'test',
    title: 'test',
    image: 'test',
  };
  const mockFn = jest.fn();

  it('should call onClose method', async () => {
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
    await waitFor(() => {
      expect(mockFn).toBeCalled();
    });
  });

  it('should call toggleIsFavorite method', async () => {
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
    await waitFor(() => {
      expect(mockFn).toBeCalled();
    });
  });

  it('overlay should has isVisible true', async () => {
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
    await waitFor(() => {
      expect(overlay).toBe(true);
    });
  });

  it('button should be green if movie isn`t favorite', async () => {
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
    await waitFor(() => {
      expect(buttonColor).toBe(COLORS.GREEN);
    });
  });

  it('button should be red if movie is favorite', async () => {
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
    await waitFor(() => {
      expect(buttonColor).toBe(COLORS.RED_DARK);
    });
  });

  it('button should has correct text if movie is favorite ', async () => {
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
    await waitFor(() => {
      expect(button).toHaveTextContent(text);
    });
  });

  it('button should has correct text if movie isn`t favorite', async () => {
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
    await waitFor(() => {
      expect(button).toHaveTextContent(text);
    });
  });

  it('should display correct description', async () => {
    const component = render(
      <MovieInfo
        isVisible
        onClose={mockFn}
        toggleIsFavorite={mockFn}
        isInFavorites
        data={data}
      />,
    );
    await waitFor(() => {
      expect(
        component.getByTestId('description').props.children.props.children,
      ).toBe('test');
    });
  });

  it('should display correct raiting ', async () => {
    const component = render(
      <MovieInfo
        isVisible
        onClose={mockFn}
        toggleIsFavorite={mockFn}
        isInFavorites
        data={data}
      />,
    );
    await waitFor(() => {
      expect(
        component.getByTestId('raiting').props.children.props.children,
      ).toBe('test');
    });
  });
});
