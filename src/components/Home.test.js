import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home component', () => {
    it('renders', () => {
        const { container } = render(
        <MemoryRouter>
        <Home />
        </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    }) 
})