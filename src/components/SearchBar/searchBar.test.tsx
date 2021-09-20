import React from 'react';
import { render, fireEvent, RenderAPI } from '@testing-library/react-native';
import SearchBar from 'components/SearchBar';

describe('SearchBar', () => {
  const mockOnChangeValue = jest.fn();
  let component: RenderAPI;

  beforeEach(
    () =>
      (component = render(
        <SearchBar value="testValue" onChangeValue={mockOnChangeValue} />,
      )),
  );

  it('should display correct input value', () => {
    const searchValue = component.getByTestId('searchBar').props.value;
    expect(searchValue).toBe('testValue');
  });

  it('should call onChange method with correct arguments', () => {
    const searchBar = component.getByTestId('searchBar');
    fireEvent.changeText(searchBar, 'text');
    expect(mockOnChangeValue).toBeCalledWith('text');
  });
});
