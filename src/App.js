import React from 'react';
import Address from './composition/address';
import Header from './composition/header';
import Main from './composition/main';
import Section from './composition/section';

import './App.css';

function App() {
  return (
    <main className='App'>
      <Header />
      <Address />
      <Main />
      <Section />
    </main>
  );
}

export default App;
