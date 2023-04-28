import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PurchaseConfirmation from "./PurchaseConfirmation";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("PurchaseConfirmation component", () => {
    it("renders", () => {
        const { container } = render(
            <MemoryRouter>
                <PurchaseConfirmation />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });

    it("contains correct header text", () => {
        render(
            <MemoryRouter>
                <PurchaseConfirmation />
            </MemoryRouter>
        );
        screen.getByText("Thank you for your purchase!");
    });

    it("contains close button", () => {
        render(
            <MemoryRouter>
                <PurchaseConfirmation />
            </MemoryRouter>
        );
        const closeButton = screen.getByRole("button", {
            name: "close-purchase-confirmation",
        });
    });

    it("close button onClick works", async () => {
        const user = userEvent.setup();
        const mockCloseFn = jest.fn();
        render(
            <MemoryRouter>
                <PurchaseConfirmation onClose={mockCloseFn} />
            </MemoryRouter>
        );
        const closeButton = screen.getByRole("button", {
            name: "close-purchase-confirmation",
        });
        await user.click(closeButton);
        expect(mockCloseFn).toBeCalled();
    });

    it("calls close function when clicking outside", async () => {
        const user = userEvent.setup();
        const mockCloseFn = jest.fn();
        render(
            <MemoryRouter>
                <div data-testid="wrapper">
                <PurchaseConfirmation onClose={mockCloseFn} />
                </div>
            </MemoryRouter>
        );
        const closeButton = screen.getByRole("button", {
            name: "close-purchase-confirmation",
        });

        const wrapper = screen.getByTestId("wrapper");
        await user.click(wrapper);
        expect(mockCloseFn).toBeCalled();
    })
});
