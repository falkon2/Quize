import React from 'react';
import '../styles/globalStyles.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

import Header from '../components/home/Header';
import HeroHome from '../components/home/HeroHome';
import FeaturesHome from '../components/home/Features';
import FeaturesBlocks from '../components/home/FeaturesBlocks';

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });
  return (
    <div className="flex flex-col bg-slate-300 min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow ">
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
      </main>
    </div>
  );
}

export default Home;