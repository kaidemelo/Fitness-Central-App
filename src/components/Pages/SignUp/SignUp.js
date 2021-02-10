import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import { signupObjOne, signupObjTwo, signupObjThree, signupObjFour } from './Data';

function SignUp() {
  return (
    <>
      <HeroSection {...signupObjOne} />
  
      <HeroSection {...signupObjThree} />
    </>
  );
}

export default SignUp;
