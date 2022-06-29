import { render, screen } from "@testing-library/react";
import Layout from "@/components/layout/Layout";
import FilterTagPage from "@/pages/tag/[searchId]";

jest.mock("next/router", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "/",
			query: { searchId: "typescript" },
			asPath: "/",
			basePath: "/",
			isLocaleDomain: true,
			isReady: true,
			push: jest.fn(),
			prefetch: jest.fn(),
			replace: jest.fn(),
			reload: jest.fn(),
			back: jest.fn(),
			beforePopState: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
				emit: jest.fn(),
			},
			isFallback: false,
			isPreview: false,
		};
	},
}));

describe("filteredBlog", () => {
	it("test the filter of blog", () => {
		render(
			<Layout>
				<FilterTagPage />
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
