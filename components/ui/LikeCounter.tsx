import React from "react";
import LikeIcon from "../icons/LikeIcon";

type Props = {
	value: number;
};
const LikeCounter = ({ value }: Props) => {
	return (
		<div className="flex gap-2 text-sm">
			<LikeIcon />
			<p className="self-center px-2 py-1 rounded-xl bg-teal-default cursor-default">{value}</p>
		</div>
	);
};

export default LikeCounter;
