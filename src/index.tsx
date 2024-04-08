
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
const helmetContext = {};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);

// const rootElement = document.getElementById('root');
// if (rootElement !== null) {
//   ReactDOM.hydrateRoot(rootElement, <BrowserRouter>
//     <HelmetProvider context={helmetContext}>
//       <App />
//     </HelmetProvider>
//   </BrowserRouter>);
// } else {
//   console.error('Root element not found');
// }
