import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import { tosObjOne } from './Data';


function TermsOfService() {

  return (
    <>
      <HeroSection {...tosObjOne} />
    </>
  );
}

export default TermsOfService;
