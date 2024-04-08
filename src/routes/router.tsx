import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Layout } from "../components/Layout";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { Albums } from "../pages/Albums";
import { Posts } from "../pages/Posts";

export const router = createBrowserRouter(createRoutesFromElements(
	<Route path="/" element={<Layout />} errorElement={<NotFound />}>
		<Route index element={<Home />} />
		<Route path="/albums" element={<Albums />} />
		<Route path="/posts" element={<Posts />} />
	</Route>
))