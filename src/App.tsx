import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import { PageRoutes } from './routes/PageRoutes';

function App() {
  return (
    <Provider store={store}>
      <PageRoutes />
    </Provider>
  );
}
export default App;
