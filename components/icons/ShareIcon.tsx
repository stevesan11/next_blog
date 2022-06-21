import React from "react";
import ShareSVG from "@/images/share.svg";

type Props = {
	onClick: () => void;
};
const ShareIcon = ({ onClick }: Props) => {
	return (
		<button onClick={onClick}>
			<ShareSVG className="w-5 h-5" />
		</button>
	);
};

export default ShareIcon;
