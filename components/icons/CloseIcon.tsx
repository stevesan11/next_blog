import React from "react";

import CloseSVG from "@/images/x.svg";

type Props = {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const CloseIcon = ({ onClick }: Props) => {
	return (
		<button onClick={onClick}>
			<CloseSVG className="w-5 h-5" />
		</button>
	);
};

export default CloseIcon;
