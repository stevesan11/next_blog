import React from "react";
import BlogItem from "./BlogItem";
import { mdData } from "types/blog";

type Props = {
	items: mdData[];
};
const BlogList = ({ items }: Props) => {
	return (
		<>
			{items.map((blog) => (
				<BlogItem
					key={blog.id}
					id={blog.id}
					image={blog.image}
					category={blog.category}
					createDate={blog.createDate}
					updateDate={blog.updateDate}
					title={blog.title}
					description={blog.description}
					tags={blog.tags}
				/>
			))}
		</>
	);
};

export default BlogList;
