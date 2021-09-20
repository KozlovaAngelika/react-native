import React from 'react';
import { render } from '@testing-library/react-native';
import Notice from 'components/Notice';
import { COLORS } from 'utils/constants';
import '@testing-library/jest-native';

describe('Notice', () => {
  it('should display correct message', () => {
    const component = render(<Notice message="text" />);
    expect(component.getByTestId('noticeText')).toHaveTextContent('text');
  });

  it('should have correct style if it is error', () => {
    const component = render(<Notice message="text" isError />);
    expect(component.getByTestId('noticeText')).toHaveStyle({
      color: COLORS.RED,
    });
  });
  
  it('should have correct style if it isn`t error', () => {
    const component = render(<Notice message="text" isError={false} />);
    expect(component.getByTestId('noticeText')).toHaveStyle({
      color: COLORS.LIGHT_GREY,
    });
  });
});
