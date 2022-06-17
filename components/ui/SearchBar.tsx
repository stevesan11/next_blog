import React, { useRef, useState } from "react";

import SearchSVG from "@/images/search.svg";
import CloseSVG from "@/images/x.svg";

const SearchBar = () => {
	const searchRef = useRef<HTMLInputElement>(null);
	const [searchVal, setSearchVal] = useState("");

	const searchClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (searchRef.current) {
			searchRef.current.focus();
		}
	};
	const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		setSearchVal("");
		if (searchRef.current) {
			searchRef.current.focus();
		}
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchVal(e.target.value);
	};
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(searchVal);
	};

	return (
		<form
			className="flex gap-2 items-center w-36 sm:w-42 lg:w-60 h-6 sm:h-8 px-3 rounded-xl bg-white drop-shadow-xl"
			onSubmit={submitHandler}
		>
			<button onClick={searchClickHandler}>
				<SearchSVG className="w-4 h-4" />
			</button>
			<input
				type="text"
				id="search"
				placeholder={"Search"}
				autoComplete="off"
				className="w-full h-full outline-0"
				ref={searchRef}
				value={searchVal}
				onChange={handleChange}
			/>
			<button onClick={deleteHandler}>
				<CloseSVG className="w-5 h-5" />
			</button>
		</form>
	);
};

export default SearchBar;
