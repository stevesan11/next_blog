import React from "react";

import CoinSVG from "@/images/coin.svg";

type Props = {
	onClick: () => void;
};
const MoneyIcon = ({ onClick }: Props) => {
	return (
		<button onClick={onClick}>
			<CoinSVG className="w-6 h-6" />
		</button>
	);
};

export default MoneyIcon;
