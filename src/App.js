import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Curriculum from './sections/Curriculum';
import SchoolLife from './sections/SchoolLife';
import Admissions from './sections/Admissions';
import Staff from './sections/Staff';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Curriculum />
      <SchoolLife />
      <Admissions />
      <Staff />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
