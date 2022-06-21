import React from "react";
import TagIcon from "../icons/TagIcon";

type Props = {
	children: React.ReactNode;
};
const Tag = ({ children }: Props) => {
	return (
		<p className="flex gap-1 items-center bg-blueGray-default px-2 py-[.8px] rounded-xl cursor-default">
			<span>
				<TagIcon />
			</span>
			{children}
		</p>
	);
};

export default Tag;
