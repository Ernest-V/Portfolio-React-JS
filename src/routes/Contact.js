import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Work about contact. Lets have a chat." />
      <ContactForm />
      <Footer />
    </div>
  )
}
export default Contact

