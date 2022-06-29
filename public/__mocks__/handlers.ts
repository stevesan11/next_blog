import { rest } from "msw";
import { dummyBlogList } from "../dummy/dummyBlogList";

export const handlers = [
	rest.get("http://localhost:3000/category/:searchId", (req, res, ctx) => {
		const { searchId } = req.params;
		const filteredList = dummyBlogList.filter((blog) => {
			if (typeof searchId === "string") {
				return blog.category.toLowerCase() === searchId.toLowerCase();
			}
		});
		return res(ctx.json({ filteredList }));
	}),

	rest.get("http://localhost:3000/tag/:searchId", (req, res, ctx) => {
		const { searchId } = req.params;
		const filteredList = dummyBlogList.filter((blog) => {
			const testItemTag = blog.tags.filter((tag) => {
				if (typeof searchId === "string") {
					return tag.toLowerCase() === searchId.toLowerCase();
				}
			});
			if (testItemTag.length) {
				return blog;
			}
		});

		return res(ctx.json({ filteredList }));
	}),
];
