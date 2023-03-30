//index.js: Entry point for rendering the React application.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globalStyles.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);


