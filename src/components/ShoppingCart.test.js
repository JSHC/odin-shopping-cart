import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShoppingCart from './ShoppingCart';

describe('ShoppingCart component', () => {
    it('renders', () => {
        const { container } = render(<ShoppingCart />);
        expect(container).toMatchSnapshot();
    }) 
})