// RNText.test.tsx

import { render } from '@testing-library/react-native';
import React from 'react';
import RNText from './rn-text.component';

// Mocking react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('RNText', () => {
  test('renders text correctly', () => {
    const { getByText } = render(<RNText text="hello" />);
    const textElement = getByText('hello');
    expect(textElement).toBeDefined();
  });

  test('renders children correctly', () => {
    const { getByText } = render(<RNText>Hello, World!</RNText>);
    const textElement = getByText('Hello, World!');
    expect(textElement).toBeDefined();
  });

  test('applies style correctly', () => {
    const { getByTestId } = render(<RNText testID="text" style={{ color: 'red' }} />);
    const textElement = getByTestId('text');
    expect(textElement).toHaveStyle({ color: 'red' });
  });

  test('applies numberOfLines correctly', () => {
    const { getByTestId } = render(<RNText testID="text" numberOfLines={2} />);
    const textElement = getByTestId('text');
    expect(textElement).toHaveProp('numberOfLines', 2);
  });
});
