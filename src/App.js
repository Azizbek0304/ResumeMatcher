import React, { useState } from 'react';
import Header from './components/Header';
import Pricing from './components/Pricing';
import PricingCard from './components/pricing2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import TryIt from './components/TryIt';
// import HowTo from './components/HowTo';
// import WhyChoose from './components/WhyChoose';
import './style.css';

export default function App() {
  const theme = createTheme();
  const [isNightMode, setIsNightMode] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <Header isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
      <main>
        {/* <TryIt isNightMode={isNightMode} />
        <WhyChoose isNightMode={isNightMode} />
        <HowTo isNightMode={isNightMode} /> */}
        <Pricing isNightMode={isNightMode} />
        <PricingCard isNightMode={isNightMode} />
      </main>
    </ThemeProvider>
  );
}
