import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

// v63 check how this works
const isGitHubPages = window.location.hostname.includes('github.io');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // v63 check react strict mode ?
  <React.StrictMode>
    {/* v63 check how this works */}
    <BrowserRouter basename={isGitHubPages ? '/employee-search' : '/'}>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// v63 check how this collect stats
reportWebVitals();
