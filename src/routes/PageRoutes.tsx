import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { Albums } from "../pages/Albums";
import { Posts } from "../pages/Posts";


export const PageRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />} >
				<Route index element={<Home />} />
				<Route path="/albums" element={<Albums />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	)
}
