import React from 'react';
//import './App.css';
import Companies from './components/Companies';
import CustomerCards from './components/CustomerCards';
import Footer from './components/Footer';
import FooterForm from './components/FooterForm';
import HeroSection from './components/HeroSection';
import NanonetsCard from './components/NanonetsCard';
import RossumToNanonets from './components/RossumToNanonets';
import TryNanonets from './components/TryNanonets';
import WhyNanonets from './components/WhyNanonets';

function App() {
  return (
    <div >
    <HeroSection/>
    <Companies/>
    <WhyNanonets/>
    <TryNanonets/>
    <NanonetsCard/>
    <RossumToNanonets/>
    <CustomerCards/>
    <FooterForm/>
    <Footer / >
    
    </div>
  );
}

export default App;
