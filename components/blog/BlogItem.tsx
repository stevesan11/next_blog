import React from "react";
import Image from "next/image";

import CreateDate from "../ui/CreateDate";
import UpdateDate from "../ui/UpdateDate";
import Tag from "../ui/Tag";
import Category from "../ui/Category";

import { useRouter } from "next/router";

import { TwitterShareButton, TwitterIcon } from "react-share";

type Props = {
	id: string;
	image: string;
	category: string;
	createDate: string;
	updateDate: string;
	title: string;
	description: string;
	tags: string[];
};
const BlogItem = (props: Props) => {
	const router = useRouter();
	const clickLinkHandler = () => {
		router.push(`/blog/${props.id}`);
		console.log(router);
	};
	const clickShareHandler = async () => {
		try {
			await window.navigator.share({
				title: props.title,
				text: props.description,
				url: `http://localhost:3000/blog/${props.id}`,
			});
			alert("共有が完了しました。");
		} catch (err) {
			console.log(err);
		}
		if (!window.navigator.share) {
			alert("ご利用のブラウザでは共有できません。");
			return;
		}
	};
	return (
		<div className="w-[330px] rounded-xl text-start shadow-lg shadow-blueGrayDark cursor-default bg-blueGray-light">
			<div className="h-[200px] relative rounded-t-lg overflow-hidden">
				<Image src={props.image} layout="fill" objectFit="cover" />
			</div>
			<div className="flex flex-col gap-3 pt-2 p-6 relative">
				<div className="flex justify-center gap-2 text-xs">
					<Category categoryName={props.category} />
					<CreateDate>{props.createDate}</CreateDate>
					<UpdateDate>{props.updateDate}</UpdateDate>
				</div>
				<div className="flex justify-center">
					<h3 className="text-xl text-black/[.66]">{props.title}</h3>
					<div className="absolute right-0 flex gap-2 mr-6">
						<TwitterShareButton url={`http://localhost:3000/blog/${props.id}`} title={props.title}>
							<TwitterIcon size={30} round />
						</TwitterShareButton>
					</div>
				</div>
				<p className="text-black/[.66]">{props.description}</p>
				<ul className="flex gap-2 flex-wrap text-sm">
					{props.tags.map((tag) => {
						return <Tag key={tag} tagName={tag} />;
					})}
				</ul>
				<div className="flex justify-end">
					<button
						className="px-3 py-2 rounded-xl bg-teal-default text-black/[.66] shadow-md shadow-tealDefault focus:shadow-inner focus:bg-teal-dark"
						onClick={clickLinkHandler}
					>
						続きを読む
					</button>
				</div>
			</div>
		</div>
	);
};

export default BlogItem;
