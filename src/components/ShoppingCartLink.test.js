import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShoppingCartLink from "./ShoppingCartLink";
import { MemoryRouter } from "react-router-dom";

describe("ShoppingCartLink component", () => {
    it("renders", () => {
        const { container } = render(
            <MemoryRouter>
                <ShoppingCartLink />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
