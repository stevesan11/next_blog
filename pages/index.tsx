import React from "react";
import fs from "fs";
import matter from "gray-matter";

import BlogList from "@/components/blog/BlogList";
import Tag from "@/components/ui/Tag";

import { mdData, mdProps } from "types/blog";

import Category from "@/components/ui/Category";
import { GetStaticProps } from "next";

type Props = {
	markdownList: mdProps[];
	categoryList: string[];
	tagList: string[];
};
const Home = ({ markdownList, categoryList, tagList }: Props) => {
	const listData = markdownList.map((markdown) => {
		return markdown.data;
	});

	return (
		<div className="justify-center ml-10 mr-12 my-10 grid grid-flow-row gap-10 lg:grid-cols-4 lg:gap-5">
			<div className="flex flex-wrap justify-center items-start gap-8 order-2 lg:order-1 lg:col-span-3">
				{listData && <BlogList items={listData} />}
			</div>
			<div className="order-1 mx-20 lg:mx-0 lg:order-2 lg:col-span-1 lg:w-[300px] lg:block">
				<div className="flex flex-col gap-10 sticky top-10">
					<div className="flex flex-col gap-3">
						<h1 className="text-xl">カテゴリー</h1>
						<ul className="flex gap-2 flex-wrap text-sm">
							{categoryList.map((category) => {
								return <Category key={category} categoryName={category} />;
							})}
						</ul>
					</div>
					<div className="flex flex-col gap-3">
						<h1 className="text-xl">タグ</h1>
						<ul className="flex gap-2 flex-wrap text-sm">
							{tagList.map((tag) => {
								return <Tag key={tag} tagName={tag} />;
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const path = fs.readdirSync("./public/docs");

	const markdownList = await Promise.all(
		path.map(async (file) => {
			const mdData = await import(`../public/docs/${file}`);
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
			markdownList,
			categoryList,
			tagList,
		},
	};
};

export default Home;
