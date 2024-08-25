import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Wrap the app in things you need to use on any page

root.render(
  <BrowserRouter>
    <UserProvider> 
      <App />
    </UserProvider>
  </BrowserRouter>
);
