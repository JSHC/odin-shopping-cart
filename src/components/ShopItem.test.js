import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShopItem from './ShopItem';

describe('Home component', () => {
    it('renders', () => {
        const { container } = render(<ShopItem />);
        expect(container).toMatchSnapshot();
    })
    it('renders item', () => {
        const item1 = {id: 1, name: 'Item1', price: 10}
        render(<ShopItem {...item1}/>);
        screen.getByText('Item1');
        screen.getByText('10');
    })
})