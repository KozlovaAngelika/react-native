import React from 'react';
import { render, fireEvent, RenderAPI } from '@testing-library/react-native';
import MovieTile from 'components/MovieTile';

describe('MovieTile', () => {
  const data = {
    id: 'test',
    title: 'test',
    image: 'test',
  };

  it('should display correct value', () => {
    const component = render(<MovieTile data={data} isInFavorites />);
    expect(component.getByTestId('CardTitle')).toHaveTextContent('test');
    expect(component.getByTestId('cardImage')).toHaveProp('source', {
      uri: 'test',
    });
    expect(component.getByTestId('cardImage')).toHaveProp('source', {
      uri: 'test',
    });
  });

  it('should display correct value if image url is empty', () => {
    data.image = '';
    const component = render(<MovieTile data={data} isInFavorites />);
    expect(component.getByTestId('cardImage')).toHaveProp('source', {
      testUri: '../../../src/media/defaultImg.png',
    });
  });
});
