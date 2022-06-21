import React from "react";
import SearchSVG from "@/images/search.svg";

type Props = {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Search = ({ onClick }: Props) => {
	return (
		<button onClick={onClick}>
			<SearchSVG className="w-4 h-4" />
		</button>
	);
};

export default Search;
