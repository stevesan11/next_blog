import React from "react";

import BlogList from "@/components/blog/BlogList";

const Home = () => {
	return (
		<div className="justify-center sm:mx-10 my-10 grid grid-flow-row gap-10 lg:grid-cols-4 lg:gap-5">
			<div className="flex flex-wrap justify-center items-start gap-8 order-2 lg:order-1 lg:col-span-3">
				<BlogList />
			</div>
			<div className="order-1 mx-10 lg:mx-0 lg:order-2 lg:col-span-1 lg:w-[300px] lg:block">
				<h1 className="text-xl sticky top-10">カテゴリー</h1>
				<h1 className="text-xl sticky top-20">タグ</h1>
			</div>
		</div>
	);
};

export default Home;
