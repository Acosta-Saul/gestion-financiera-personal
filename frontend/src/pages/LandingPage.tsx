import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfoSection />
    </div>
  );
};

export default LandingPage;
