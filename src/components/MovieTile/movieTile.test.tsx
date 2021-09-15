import React from 'react';
import { render } from '@testing-library/react-native';
import configureMockStore from 'redux-mock-store';
import MovieTile from 'components/MovieTile';
import { Provider } from 'react-redux';
import '@testing-library/jest-native';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: async () => await new Promise(() => {}),
    },
  }),
}));

describe('MovieTile', () => {
  const data = {
    id: 'test',
    title: 'test',
    image: 'test',
  };
  const initialState = {
    topMovies: { data: null },
    favorites: { data: [] },
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
    expect(component.getByTestId('cardImage')).toHaveProp('source', {
      testUri: '../../../src/media/defaultImg.png',
    });
  });
});
