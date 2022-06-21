import React from "react";
import Image from "next/image";

import CreateDate from "../ui/CreateDate";
import UpdateDate from "../ui/UpdateDate";
import Tag from "../ui/Tag";
import Category from "../ui/Category";
import LikeCounter from "../ui/LikeCounter";

import MoneyIcon from "../icons/MoneyIcon";
import ShareIcon from "../icons/ShareIcon";

type Props = {
	image: string;
	category: string;
	CreateDate: string;
	UpdateDate: string;
	title: string;
	description: string;
	tags: string[];
	likeCount: number;
	onClick: () => void;
};
const BlogItem = ({ ...props }: Props) => {
	return (
		<div className="w-[330px] rounded-xl text-start shadow-lg shadow-blueGrayDark cursor-default bg-blueGray-light">
			<div className="h-[200px] relative rounded-t-lg overflow-hidden">
				<Image src={props.image} layout="fill" objectFit="cover" />
			</div>
			<div className="flex flex-col gap-3 pt-2 p-6 relative">
				<div className="flex justify-center gap-2 text-xs">
					<Category>{props.category}</Category>
					<CreateDate>{props.CreateDate}</CreateDate>
					<UpdateDate>{props.UpdateDate}</UpdateDate>
				</div>
				<div className="flex justify-center">
					<h3 className="text-xl text-black/[.66]">{props.title}</h3>
					<div className="absolute right-0 flex gap-3 mx-6">
						<MoneyIcon onClick={() => {}} />
						<ShareIcon onClick={() => {}} />
					</div>
				</div>
				<p className="text-black/[.66]">{props.description}</p>
				<div className="flex gap-2 flex-wrap text-sm">
					{props.tags.map((tag) => {
						return <Tag>{tag}</Tag>;
					})}
				</div>
				<div className="flex justify-between">
					<LikeCounter value={props.likeCount} />
					<button
						className="px-3 py-2 rounded-xl bg-teal-default text-black/[.66]"
						onClick={props.onClick}
					>
						続きを読む
					</button>
				</div>
			</div>
		</div>
	);
};

export default BlogItem;
