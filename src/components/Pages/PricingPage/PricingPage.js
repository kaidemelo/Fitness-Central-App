import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import { pricingObjOne } from './Data';
import PricingComponent from '../../PricingComponent/Pricing';


function PricingPage() {

  return (
    <>
      <HeroSection {...pricingObjOne} />
      <PricingComponent />
    </>
  );
}

export default PricingPage;
