import React, { useState } from "react";
import LikeSVG from "@/images/heart.svg";
import LikeFillSVG from "@/images/heart-fill.svg";

const LikeIcon = () => {
	const [isClicked, setIsClicked] = useState(false);

	const clickHandler = (e: React.MouseEvent) => {
		setIsClicked((prev) => !prev);
	};

	return (
		<button onClick={clickHandler}>
			{isClicked ? <LikeFillSVG className="w-5 h-5" /> : <LikeSVG className="w-5 h-5" />}
		</button>
	);
};

export default LikeIcon;
