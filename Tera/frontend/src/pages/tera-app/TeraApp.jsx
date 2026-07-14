import React from 'react';
import About from '@/components/home/about/About';
import Partnership from '@/components/home/partnership/Partnership';
import Information from '@/components/home/information/Information';
import DontMiss from '@/components/home/dont-miss/DontMiss';
import Home from '@/components/home/home/Home';

const TeraApp = ({ onConnectWallet, onLogout }) => {
  return (
    <div className="tera-app">
      <Home onConnectWallet={onConnectWallet} onLogout={onLogout} />
      <About />
      <Partnership />
      <Information />
      <DontMiss onConnectWallet={onConnectWallet} onLogout={onLogout} />
    </div>
  );
};

export default TeraApp;
