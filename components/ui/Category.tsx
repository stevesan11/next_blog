import React from "react";
import FolderIcon from "../icons/FolderIcon";

type Props = {
	children: React.ReactNode;
};
const Category = ({ children }: Props) => {
	return (
		<p className="flex gap-1 bg-blueGray-default px-2 py-[.8px] rounded-xl">
			<span>
				<FolderIcon />
			</span>
			{children}
		</p>
	);
};

export default Category;
