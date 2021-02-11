import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import { errorpageObjOne } from './Data';


function ErrorPage() {

  return (
    <>
      <HeroSection {...errorpageObjOne} />
    </>
  );
}

export default ErrorPage;
