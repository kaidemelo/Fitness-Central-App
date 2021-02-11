import React from 'react';
import HeroSection3 from '../../HeroSection3/HeroSection3';
import { teamObjOne } from './Data';


function Team() {

  return (
    <>
      <HeroSection3 {...teamObjOne} />
    </>
  );
}

export default Team;
