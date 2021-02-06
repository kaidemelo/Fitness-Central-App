import React from 'react';
import '../../App.css';
import PricingCards from '../PricingCards';
import Footer from '../Footer';

export default function Pricing() {
  return (
    <>
    <h1 className='pricing'>PRICING</h1>
    <PricingCards />
    <Footer />
  </>
  );
}
