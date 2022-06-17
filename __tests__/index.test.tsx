import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
	it("renders a heading", () => {
		render(<Home />);

		const heading = screen.getByRole("heading", {
			name: /blog space/i,
		});
		expect(heading).toBeInTheDocument();
	});
	it("press the icon to move to another page", () => {
		render(<Home />);

		const userIcon = screen.getByRole("button", {})
	});
});
