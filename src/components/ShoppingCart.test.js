import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShoppingCart from './ShoppingCart';

describe('ShoppingCart component', () => {
    it('renders', () => {
        const { container } = render(<ShoppingCart />);
        expect(container).toMatchSnapshot();
    }) 

    it('renders shopping cart item', () => {
        const cartItems = [
            {id: 1, name: 'Item1', quantity: 1, price: 10}
        ];
        render(<ShoppingCart cartItems={cartItems}/>)
        screen.getByText('Item1');
        screen.getByText('1')
        screen.getByText('10')
    })
})