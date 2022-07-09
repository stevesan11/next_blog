import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import FolderIcon from "../icons/FolderIcon";

type Props = {
	categoryName: string;
};
const Category = ({ categoryName }: Props) => {
	const router = useRouter();
	return (
		<li className="bg-blueGray-default px-2 py-[.8px] rounded-xl cursor-pointer list-none">
			<Link href={`${process.env.NEXT_PUBLIC_VERCEL_URL}/category/${categoryName}`}>
				<a className="flex gap-1 items-center">
					<span>
						<FolderIcon />
					</span>
					<p>{categoryName}</p>
				</a>
			</Link>
		</li>
	);
};

export default Category;
