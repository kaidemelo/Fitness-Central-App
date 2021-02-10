import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import { howitworksObjOne, howitworksObjTwo, howitworksObjThree, howitworksObjFour,  howitworksObjFive} from './Data';

function HowItWorks() {
  return (
    <>
      <HeroSection {...howitworksObjOne} />
      <HeroSection {...howitworksObjTwo} />
      <HeroSection {...howitworksObjThree} />
      <HeroSection {...howitworksObjFour} />
      <HeroSection {...howitworksObjFive} />
    </>
  );
}

export default HowItWorks;
