import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Home component', () => {
    it('renders', () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    }) 
})