//index.js: Entry point for rendering the React application.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globalStyles.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
const cloudinary = require('cloudinary');

cloudinary.v2.config({
  cloud_name: 'dvx6axvmy',
  api_key: '216913689172872',
  api_secret: 'JZKkqbcyGrWq_aaTG5hatnZ30Vw',
  secure: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);


