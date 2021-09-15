import React from 'react';
import { render, fireEvent, RenderAPI } from '@testing-library/react-native';
import SearchBar from 'components/SearchBar';

describe('SearchBar', () => {
  const mockFn = jest.fn();
  let component: RenderAPI;

  beforeEach(
    () =>
      (component = render(
        <SearchBar value="testValue" onChangeValue={mockFn} />,
      )),
  );

  it('should display correct value', () => {
    const searchValue = component.getByTestId('searchBar').props.value;
    expect(searchValue).toBe('testValue');
  });

  it('should call onChange method with arguments', () => {
    const searchBar = component.getByTestId('searchBar');
    fireEvent.changeText(searchBar, 'text');
    expect(mockFn).toBeCalledWith('text');
  });
});
