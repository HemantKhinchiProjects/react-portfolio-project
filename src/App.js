import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ContactUs from './components/ContactUs';
import resumeData from './resumeData';
import './style.css';

export default function App() {
  return (
    <div classname="App">
      <Header />
      <About />
      <ContactUs resumeData={resumeData} />
    </div>
  );
}
