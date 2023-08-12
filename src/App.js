import React, { useState } from 'react';
import Header from './components/Header';
import TryIt from './components/TryIt';
import HowTo from './components/HowTo';
import WhyChoose from './components/WhyChoose';
import './style.css';

export default function App() {
  const [isNightMode, setIsNightMode] = useState(false);
  return (
    <>
      <Header isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
      <main>
        <TryIt isNightMode={isNightMode} />
        <WhyChoose isNightMode={isNightMode} />
        <HowTo isNightMode={isNightMode} />
      </main>
    </>
  );
}
