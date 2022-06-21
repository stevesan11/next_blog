import React from "react";
import PencilIcon from "../icons/PencilIcon";

type Props = {
	children: React.ReactNode;
};
const CreateDate = ({ children }: Props) => {
	return (
		<span className="flex gap-1 items-center">
			<PencilIcon />
			<p>{children}</p>
		</span>
	);
};

export default CreateDate;
