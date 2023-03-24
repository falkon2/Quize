//index.js: Entry point for rendering the React application.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);


