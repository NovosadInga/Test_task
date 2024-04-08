import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Albums } from "./pages/Albums";
import { Posts } from "./pages/Posts";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<NotFound />}>
          <Route index element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Provider>
  );
}
export default App;
