import './style/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/Kasa-P8">
    <Header />
    <Routing />
    <Footer />
  </BrowserRouter>
);
