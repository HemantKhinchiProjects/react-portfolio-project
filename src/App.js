import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import ContactUs from './components/ContactUs';
import resumeData from './resumeData';
import './style.css';

export default function App() {
  return (
    <div classname="App">
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <ContactUs resumeData={resumeData} />
    </div>
  );
}
