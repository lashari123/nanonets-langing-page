import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import HeroSection from './components/HeroSection';
import Companies from './components/Companies';
import WhyNanonets from './components/WhyNanonets';
import TryNanonets from './components/TryNanonets';
import RossumToNanonets from './components/RossumToNanonets';
import CustomerCards from './components/CustomerCards';
import NanonetsCard from './components/NanonetsCard';
import FooterForm from './components/FooterForm';
import Footer from './components/Footer';



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
