import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import { signupObjOne } from './Data';
import Form from '../../SignUpComponent/Form';

function SignUp() {
  return (
    <>
      <HeroSection {...signupObjOne} />
      <Form />
    </>
  );
}

export default SignUp;
