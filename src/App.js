import React, { useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import ContactUs from './components/ContactUs';
import resumeData from './resumeData';
import './style.css';

export default function App() {
  const aboutSection = useRef(null);
  

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <div className="App">
      <Header
        resumeData={resumeData}
        onClick={() => scrollDown(aboutSection)}
      />
      <About resumeData={resumeData} ref={aboutSection} />
      <Resume resumeData={resumeData} />
      <ContactUs resumeData={resumeData} />
    </div>
  );
}
