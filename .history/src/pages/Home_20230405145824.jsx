import React from 'react';

import Header from '../components/home/Header';
import HeroHome from '../components/home/HeroHome';
import FeaturesHome from '../components/home/Features';
import FeaturesBlocks from '../components/home/FeaturesBlocks';

function Home() {
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