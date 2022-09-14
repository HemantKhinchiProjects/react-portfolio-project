import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import ContactUs from './components/ContactUs';
import resumeData from './resumeData';
import './style.css';

export default function App() {
  useEffect(() => {}, []);
  const scrollHandler = (e) => {
    e.preventDefault();
    console.log('asdf');
  };
  return (
    <div className="App">
      <Header resumeData={resumeData} scrollHandler={scrollHandler} />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <ContactUs resumeData={resumeData} />
    </div>
  );
}
