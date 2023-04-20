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

    it('redners multiple items', () => {
        const cartItems = [
            {id: 1, name: 'Item1', quantity: 1, price: 10},
            {id: 2, name: 'Item2', quantity: 2, price: 20}
        ]

        render(<ShoppingCart cartItems={cartItems}/>)
        screen.getByText('Item1');
        screen.getByText('1');
        screen.getByText('10');

        screen.getByText('Item2');
        screen.getByText('2');
        screen.getByText('20');
    })
})