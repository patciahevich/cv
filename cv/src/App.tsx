import React from 'react';
import './App.scss';
import Header from './header/Header.tsx';
import Nav from './nav/Nav.tsx';
import Main from './main/Main.tsx';
import Footer from './footer/Footer.tsx';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
