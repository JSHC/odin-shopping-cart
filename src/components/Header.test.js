import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header component', () => {
    it('renders', () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    }) 
})