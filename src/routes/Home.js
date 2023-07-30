import React from 'react';
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';
// import Work from '../components/Work';
import ComponentSlider from '../components/ComponentSlider';
import '../components/SliderStyle.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImage />
      <ComponentSlider />
      <Footer />
    </>
  )
}
export default Home;