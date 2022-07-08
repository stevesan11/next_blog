import React from "react";
import Link from "next/link";


import GitSVG from "@/images/github.svg";
import UserSVG from "@/images/person-fill.svg";

const Header = () => {
	return (
		<header className="flex justify-between sm:mx-20 lg:mx-48 sm:my-10 p-3 sm:p-4 lg:p-6 bg-blueGray-light sm:drop-shadow-xl sm:rounded-xl">
			<h1 className="text-xl sm:text-3xl lg:text-4xl cursor-default">BLOG SPACE</h1>
			<nav className="flex gap-5 my-auto items-center cursor-pointer">
				<Link href="/">
					<a>
						<UserSVG className="w-6 h-6 sm:w-8 sm:h-8 lg:w-11 lg:h-11 hover:text-tealDefault" />
					</a>
				</Link>
				<a href="https://github.com/stevesan11">
					<GitSVG className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:text-tealDefault" />
				</a>
			</nav>
		</header>
	);
};

export default Header;
