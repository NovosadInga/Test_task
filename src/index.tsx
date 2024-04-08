
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
const rootElement = document.getElementById('root');
const helmetContext = {};
if (rootElement !== null) {
  hydrateRoot(rootElement, <BrowserRouter>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </BrowserRouter>);
} else {
  console.error('Root element not found');
}
