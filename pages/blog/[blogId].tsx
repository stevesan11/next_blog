import React, { ElementType } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import "github-markdown-css/github-markdown-light.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import { mdProps, mdData } from "../../types/blog";

type ImageProps = {
	src: string;
	alt: string;
	title: string;
};
type Props = {
	markdown: mdProps;
};
const blogDetail = ({ markdown }: Props) => {
	const components: { [nodeType: string]: ElementType } = {
		p: ({ node, children }) => {
			if (node.children[0].tagName === "img") {
				const image: any = node.children[0];
				const { src, alt, title }: ImageProps = image.properties;
				const width = title.split("_")[0];
				const height = title.split("_")[1];
				return (
					<div>
						<Image src={src} alt={alt} width={width} height={height} />
					</div>
				);
			}
			// Return default child if it's not an image
			return <p>{children}</p>;
		},
		image: ({ node }) => {
			const { src, alt, title }: ImageProps = node.properties;
			const width = title.split("_")[0];
			const height = title.split("_")[1];
			return <Image src={src} alt={alt} width={width} height={height} />;
		},
		code: ({ node }) => {
			let language;
			let fileName;
			let code;
			if (node.properties.className[0]) {
				const className = node.properties.className[0].split(/-|:/);
				language = className[1];
				fileName = className[2];
			}
			if (node.children[0].value) {
				code = node.children[0].value;
			}
			return (
				<>
					{language && <p>{fileName ? `${language}:${fileName}` : `${language}`}</p>}
					{language && (
						<SyntaxHighlighter language={language} style={materialDark}>
							{code}
						</SyntaxHighlighter>
					)}
				</>
			);
		},
	};

	return (
		<div className="w-screen max-w-5xl mx-auto my-0">
			{markdown.content && (
				<ReactMarkdown
					components={components}
					className="markdown-body p-3"
					remarkPlugins={[remarkGfm]}
					skipHtml={true}
				>
					{markdown.content}
				</ReactMarkdown>
			)}
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { blogId } = context.params!;

	const markdown = await import(`../../public/docs/${blogId}.md`);
	const markdownData = matter(markdown.default);
	const { content, data } = markdownData;
	const { title, createDate, updateDate, category, tags, description, image } = data as mdData;
	return {
		props: {
			markdown: {
				content,
				data: {
					id: blogId,
					title,
					createDate,
					updateDate,
					category,
					tags,
					description,
					image,
				},
			},
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const path = fs.readdirSync("./public/docs");
	const filePath = path.map((file) => {
		const pathName = file.split(".");
		return { params: { blogId: pathName[0] } };
	});
	return {
		paths: filePath,
		fallback: false,
	};
};

export default blogDetail;
