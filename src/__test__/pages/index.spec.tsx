import React from 'react';
import { render } from '@testing-library/react';
import Home from '@/pages';

describe('home page', () => {
  it('should handle render homepage', () => {
    const { container } = render(<Home />);
    expect( container ).toMatchSnapshot();
  });

  it('should handle text in homepage', () => {
    const { getByText } = render(<Home />);
    expect( 
      getByText('Find in-depth information about Next.js features and API.')
    ).toBeInTheDocument();
  });

  it('should handle element use role in homepage', () => {
    const { getByRole } = render(<Home />);
    expect( getByRole('subtitle')).toMatchSnapshot();
  });
});