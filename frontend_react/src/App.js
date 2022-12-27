import React from 'react';
import './App.scss'
import { About, Footer, Header, Work, Skills } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div classname="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;