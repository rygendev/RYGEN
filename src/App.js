// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
