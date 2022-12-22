import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import  ContextData from './Context/Context';
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContextData>
        <App/>
      </ContextData>
    </Router>
  </React.StrictMode>
);

