import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import MovieInfo, {
  Props as MovieInfoProps,
} from 'components/MovieTile/MovieInfo';
import { COLORS } from 'utils/constants';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

axios.get = jest.fn().mockResolvedValue({
  data: { plot: 'test', imDbRating: 'test', errorMessage: null },
});

describe('MovieInfo', () => {
  const data = {
    id: 'test',
    title: 'test',
    image: 'test',
  };

  const mockToggleIsFavorite = jest.fn();
  const mockOnCLose = jest.fn();

  const renderComponent = (props?: Partial<MovieInfoProps>): any =>
    render(
      <MovieInfo
        isVisible
        onClose={mockOnCLose}
        toggleIsFavorite={mockToggleIsFavorite}
        isInFavorites
        data={data}
        {...props}
      />,
    );

  it('should call onClose method', async () => {
    const component = renderComponent();
    const button = component.getByTestId('closeBtn');
    fireEvent.press(button);
    await waitFor(() => {
      expect(mockOnCLose).toBeCalled();
    });
  });

  it('overlay should has isVisible true', async () => {
    const component = renderComponent();
    const overlay = component.getByTestId('overlay').props.visible;
    await waitFor(() => {
      expect(overlay).toBe(true);
    });
  });

  it('button should be green if movie isn`t favorite', async () => {
    const component = renderComponent({ isInFavorites: false });
    const buttonColor = component.getByTestId('toggleBtn').props.children[0]
      .props.style.backgroundColor;
    await waitFor(() => {
      expect(buttonColor).toBe(COLORS.GREEN);
    });
  });

  it('button should be red if movie is favorite', async () => {
    const component = renderComponent();
    const buttonColor = component.getByTestId('toggleBtn').props.children[0]
      .props.style.backgroundColor;
    await waitFor(() => {
      expect(buttonColor).toBe(COLORS.RED_DARK);
    });
  });

  it('button should has correct text if movie is favorite', async () => {
    const { t } = useTranslation();
    const component = renderComponent();
    const button = component.getByTestId('toggleBtn');
    const text = t('removeFromFavorites');
    await waitFor(() => {
      expect(button).toHaveTextContent(text);
    });
  });

  it('button should has correct text if movie isn`t favorite', async () => {
    const { t } = useTranslation();
    const component = renderComponent({ isInFavorites: false });
    const button = component.getByTestId('toggleBtn');
    const text = t('addToFavorites');
    await waitFor(() => {
      expect(button).toHaveTextContent(text);
    });
  });

  it('should display correct description', async () => {
    const component = renderComponent();
    await waitFor(() => {
      expect(
        component.getByTestId('description').props.children.props.children,
      ).toBe('test');
    });
  });

  it('should display correct raiting ', async () => {
    const component = renderComponent();
    await waitFor(() => {
      expect(
        component.getByTestId('raiting').props.children.props.children,
      ).toBe('test');
    });
  });
});
