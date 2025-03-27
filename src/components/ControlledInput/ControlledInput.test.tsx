import { render, screen } from "@testing-library/react";

import ControlledInput from "./ControlledInput";

describe("ControlledInput", () => {
	it("render the component", () => {
		render(<ControlledInput data-testid="input" />);
		screen.debug();

		const input = screen.getByTestId("input");
		expect(input).toBeInTheDocument();
		expect(input).not.toHaveClass("ring-destructive");
		const err = screen.queryByTestId("input-error");
		expect(err).not.toBeInTheDocument();
	});

	it("render the component with error", () => {
		render(<ControlledInput error="error" data-testid="input" />);
		screen.debug();

		const input = screen.getByTestId("input");
		expect(input).toBeInTheDocument();
		expect(input).toHaveClass("ring-destructive");
		const err = screen.getByTestId("input-error");
		expect(err).toBeInTheDocument();
		expect(err).toHaveClass("text-destructive");
		expect(err).toHaveTextContent("error");
	});
});
