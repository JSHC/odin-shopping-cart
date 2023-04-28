import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "./Shop";

describe("Shop component", () => {
    it("renders", () => {
        const { container } = render(<Shop />);
        expect(container).toMatchSnapshot();
    });
});
