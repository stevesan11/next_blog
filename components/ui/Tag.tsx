import Link from "next/link";
import React from "react";
import TagIcon from "../icons/TagIcon";

type Props = {
	tagName: string;
};
const Tag = ({ tagName }: Props) => {
	return (
		<li className="bg-blueGray-default px-2 py-[.8px] rounded-xl cursor-pointer list-none">
			<Link href={`${process.env.NEXT_PUBLIC_VERCEL_URL}/tag/${tagName}`}>
				<a className="flex gap-1 items-center">
					<span>
						<TagIcon />
					</span>
					<p>{tagName}</p>
				</a>
			</Link>
		</li>
	);
};

export default Tag;
