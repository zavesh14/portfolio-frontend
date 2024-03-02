/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Contact from './components/Contact/Contact.jsx';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' exact Component={App}/>
      <Route path='/contact' Component={Contact}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
