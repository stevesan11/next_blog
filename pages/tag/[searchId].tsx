import React from "react";
import Home from "@/pages/index";
import { GetServerSideProps } from "next";
import fs from "fs";
import matter from "gray-matter";
import { mdData, mdProps } from "types/blog";

type Props = {
	filteredList: mdProps[];
	categoryList: string[];
	tagList: string[];
};
const FilterTagPage = ({ filteredList, categoryList, tagList }: Props) => {
	return <Home markdownList={filteredList} categoryList={categoryList} tagList={tagList} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { searchId } = context.params!;
	const path = fs.readdirSync("./public/docs");

	const markdownList = await Promise.all(
		path.map(async (file) => {
			const mdData = await import(`../../public/docs/${file}`);
			const markdownData = matter(mdData.default);
			const { content, data } = markdownData;
			const { title, createDate, updateDate, category, tags, description, image } = data as mdData;
			return {
				content,
				data: {
					id: file.split(".")[0],
					title,
					createDate,
					updateDate,
					category,
					tags,
					description,
					image,
				},
			};
		})
	);
	const filteredList = markdownList.filter((markdown) => {
		if (typeof searchId == "string") {
			const tagArray = markdown.data.tags.map((tag) => tag.toLowerCase());
			const searchTag = searchId.toLowerCase();
			if (tagArray.includes(searchTag)) {
				return markdown;
			}
		}
	});

	const categoryList = (() => {
		const category = markdownList.map((markdown) => {
			return markdown.data.category;
		});
		return Array.from(new Set(category));
	})();
	const tagList = (() => {
		let list: string[] = [];
		markdownList.forEach((markdown) => {
			markdown.data.tags.forEach((tag) => {
				list.push(tag);
			});
		});
		return Array.from(new Set(list));
	})();

	return {
		props: {
			filteredList,
			categoryList,
			tagList,
		},
	};
};

export default FilterTagPage;
