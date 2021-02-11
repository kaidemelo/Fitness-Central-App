import React from 'react';
import HeroSection2 from '../../HeroSection2/HeroSection2';
import HeroSection from '../../HeroSection/HeroSection';
import { testObjOne, testObjTwo, testObjThree } from './Data';


function Testimonials() {

  return (
    <>
      <HeroSection {...testObjOne} />
      <HeroSection2 {...testObjTwo} />
      <HeroSection2 {...testObjThree} />
    </>
  );
}

export default Testimonials;
