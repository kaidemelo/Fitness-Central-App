import React from 'react';
import './HeroSection3.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function HeroSection3({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  description2,
  description3,
  description4,
  description5,
  buttonEnabled,
  buttonLabel,
  buttonLink,
  alt,
  img,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description} <br/>
                  {description2} <br/>
                  {description3} <br/>
                  {description4} <br/>
                  {description5}
                </p>
                  {buttonEnabled ? <Link to= {buttonLink}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button> </Link> : null}
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>


            


          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection3;
