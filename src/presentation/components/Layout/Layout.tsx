import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<header>Layout</header>
			<main className="p-16">
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
