import React from 'react';
import { render } from '@testing-library/react-native';
import Notice from 'components/Notice';
import { COLORS } from 'utils/constants';
import '@testing-library/jest-native';

describe('Notice', () => {
  it('should display correct value', () => {
    const { getByTestId } = render(<Notice message="text" />);
    expect(getByTestId('noticeText')).toHaveTextContent('text');
  });
  it('should have correct style if it is error', () => {
    const { getByTestId } = render(<Notice message="text" isError />);
    expect(getByTestId('noticeText')).toHaveStyle({ color: COLORS.RED });
  });
  it('should have correct style if it isn`t error', () => {
    const { getByTestId } = render(<Notice message="text" isError={false} />);
    expect(getByTestId('noticeText')).toHaveStyle({ color: COLORS.LIGHT_GREY });
  });
});
