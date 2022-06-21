import React from "react";
import { blog } from "types/blog";
import BlogItem from "./BlogItem";

const dummyBlogList: blog[] = [
	{
		id: "b1",
		image: "/images/38shimari_s56.jpg",
		category: "Programming",
		CreateDate: "2022/02/02",
		UpdateDate: "2022/02/02",
		title: "Hello",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
		tags: ["TypeScript", "Jest", "React", "axios", "Next.js", "Node.js"],
		likeCount: 32,
	},
	{
		id: "b2",
		image: "/images/tree_root_green.png",
		category: "Programming",
		CreateDate: "2022/02/04",
		UpdateDate: "2022/02/02",
		title: "Hello",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
		tags: ["TypeScript", "Jest", "React", "axios", "Next.js", "Node.js"],
		likeCount: 32,
	},
	{
		id: "b3",
		image: "/images/tree_root_green.png",
		category: "Programming",
		CreateDate: "2022/02/02",
		UpdateDate: "2022/02/02",
		title: "Hello",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
		tags: ["TypeScript", "Jest", "React", "axios", "Next.js", "Node.js"],
		likeCount: 32,
	},
	{
		id: "b4",
		image: "/images/tree_root_green.png",
		category: "Programming",
		CreateDate: "2022/02/02",
		UpdateDate: "2022/02/02",
		title: "Hello",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
		tags: ["TypeScript", "Jest", "React", "axios", "Next.js", "Node.js"],
		likeCount: 32,
	},
	{
		id: "b5",
		image: "/images/tree_root_green.png",
		category: "Programming",
		CreateDate: "2022/02/02",
		UpdateDate: "2022/02/02",
		title: "Hello",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
		tags: ["TypeScript", "Jest", "React", "axios", "Next.js", "Node.js"],
		likeCount: 32,
	},
	{
		id: "b6",
		image: "/images/tree_root_green.png",
		category: "Programming",
		CreateDate: "2022/02/02",
		UpdateDate: "2022/02/02",
		title: "Hello",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
		tags: ["TypeScript", "Jest", "React", "axios", "Next.js", "Node.js"],
		likeCount: 32,
	},
	{
		id: "b7",
		image: "/images/tree_root_green.png",
		category: "Programming",
		CreateDate: "2022/02/02",
		UpdateDate: "2022/02/02",
		title: "Hello",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
		tags: ["TypeScript", "Jest", "React", "axios", "Next.js", "Node.js"],
		likeCount: 32,
	},
	{
		id: "b8",
		image: "/images/tree_root_green.png",
		category: "Programming",
		CreateDate: "2022/02/02",
		UpdateDate: "2022/02/02",
		title: "Hello",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
		tags: ["TypeScript", "Jest", "React", "axios", "Next.js", "Node.js"],
		likeCount: 30,
	},
	{
		id: "b9",
		image: "/images/tree_root_green.png",
		category: "Programming",
		CreateDate: "2022/02/02",
		UpdateDate: "2022/02/02",
		title: "Hello",
		description: "Lorem ipsum",
		tags: ["TypeScript", "Jest", "React", "axios", "Next.js", "Node.js"],
		likeCount: 30,
	},
	{
		id: "b10",
		image: "/images/tree_root_green.png",
		category: "Programming",
		CreateDate: "2022/02/02",
		UpdateDate: "2022/02/02",
		title: "Hello",
		description: "Lorem ipsum",
		tags: ["TypeScript", "Jest", "React", "axios", "Next.js", "Node.js"],
		likeCount: 30,
	},
];

const BlogList = () => {
	const clickHandler = () => {};

	return (
		<>
			{dummyBlogList.map((blog) => (
				<BlogItem
					key={blog.id}
					image={blog.image}
					category={blog.category}
					CreateDate={blog.CreateDate}
					UpdateDate={blog.UpdateDate}
					title={blog.title}
					description={blog.description}
					tags={blog.tags}
					likeCount={blog.likeCount}
					onClick={clickHandler}
				/>
			))}
		</>
	);
};

export default BlogList;
