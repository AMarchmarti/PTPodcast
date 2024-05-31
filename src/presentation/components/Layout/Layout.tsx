import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header.component";

const Layout = () => {
	return (
		<div className="w-full">
			<Header />
			<main className="p-16 mt-10">
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
