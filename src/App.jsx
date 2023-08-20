import React from 'react';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import How_to_earn from './components/how_to_earn/how_to_earn';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Testimonials />
      <How_to_earn />
      <Footer />
    </>
  )
}

export default App
