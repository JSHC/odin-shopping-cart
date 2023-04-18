import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShopItem from './ShopItem';
import userEvent from "@testing-library/user-event";

describe('ShopItem component', () => {
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

    it('renders quantity input', () => {
        const item1 = {id: 1, name: 'Item1', price: 10}
        render(<ShopItem {...item1}/>);
        const quantityInput = screen.getByLabelText("Quantity");
        expect(parseInt(quantityInput.value)).toBe(0);
    })

    it('can increase and decrease input value with buttons', async () => {
        const item1 = {id: 1, name: 'Item1', price: 10}
        const user = userEvent.setup();
        render(<ShopItem {...item1}/>);
        const quantityIncButton = screen.getByRole('button', {name: 'Inc'});
        const quantityDecButton = screen.getByRole('button', {name: 'Dec'});
        const quantityInput = screen.getByLabelText("Quantity");
        expect(parseInt(quantityInput.value)).toBe(0);
        await user.click(quantityIncButton);
        expect(parseInt(quantityInput.value)).toBe(1);
        await user.click(quantityDecButton);
        expect(parseInt(quantityInput.value)).toBe(0);
    })

    it('cannot decrease input with button lower than zero', async () => {
        const item1 = {id: 1, name: 'Item1', price: 10}
        const user = userEvent.setup();
        render(<ShopItem {...item1}/>);
        const quantityDecButton = screen.getByRole('button', {name: 'Dec'});
        const quantityInput = screen.getByLabelText("Quantity");
        expect(parseInt(quantityInput.value)).toBe(0);
        await user.click(quantityDecButton);
        expect(parseInt(quantityInput.value)).toBe(0);
    })

    it('can set quantity value from input', async () => {
        const item1 = {id: 1, name: 'Item1', price: 10}
        const user = userEvent.setup();
        render(<ShopItem {...item1}/>);
        const quantityInput = screen.getByLabelText("Quantity");
        expect(parseInt(quantityInput.value)).toBe(0);
        await user.type(quantityInput, "2");
        expect(parseInt(quantityInput.value)).toBe(2);
    })

    it('cannot set quantity value to non-number', async () => {
        const item1 = {id: 1, name: 'Item1', price: 10}
        const user = userEvent.setup();
        render(<ShopItem {...item1}/>);
        const quantityInput = screen.getByLabelText("Quantity");
        expect(parseInt(quantityInput.value)).toBe(0);
        await user.type(quantityInput, "abc");
        expect(parseInt(quantityInput.value)).toBe(0);
    })

    it('cannot set quantity value to negative number', async () => {
        const item1 = {id: 1, name: 'Item1', price: 10}
        const user = userEvent.setup();
        render(<ShopItem {...item1}/>);
        const quantityInput = screen.getByLabelText("Quantity");
        expect(parseInt(quantityInput.value)).toBe(0);
        await user.type(quantityInput, "-1");
        expect(parseInt(quantityInput.value)).not.toBe(-1);
        expect(parseInt(quantityInput.value)).not.toBeNaN();
    })
})