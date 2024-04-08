import React from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
	return (
		<>
			<Header />
			<main className="container m-auto px-[20px] grow-0 shrink basis-full py-6">
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
