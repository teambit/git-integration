import React from 'react';
import { render } from '@testing-library/react';
import { BasicIcon } from './icon.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicIcon />);
  const rendered = getByText('Hello from Icon!');
  expect(rendered).toBeTruthy();
});
