import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import Layout from "@/components/layout/Layout";

describe("Home", () => {
	it("renders a header", () => {
		render(
			<Layout>
				<Home />
			</Layout>
		);

		const heading = screen.getByRole("heading", {
			name: /blog space/i,
		});
		expect(heading).toBeInTheDocument();
		const typescriptTag = screen.getAllByText(/TypeScript/i);
		expect(typescriptTag[0]).toBeInTheDocument();
	});
});
