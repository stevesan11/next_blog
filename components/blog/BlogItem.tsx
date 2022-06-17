import React from "react";
import Image from "next/image";

const BlogItem = () => {
	return (
		<div className="w-[300px] h-[300px] bg-blueGrayDefault relative">
			<Image src="/images/tree_root_green.png" layout="fill" objectFit="contain" />
			<article></article>
		</div>
	);
};

export default BlogItem;
