import React from "react";
import UpdateIcon from "../icons/UpdateIcon";

type Props = {
	children: React.ReactNode;
};
const UpdateDate = ({ children }: Props) => {
	return (
		<span className="flex gap-1 items-center">
			<UpdateIcon />
			<p>{children}</p>
		</span>
	);
};

export default UpdateDate;
