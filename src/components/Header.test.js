import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
    it("renders", () => {
        const { container } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
