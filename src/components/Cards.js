import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of our customer reviews!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-14.jpg'
              text='"Helped me to change my life around"'
              label='John, 32'
              path='/pricing'
            />
            <CardItem
              src='images/img-15.jpg'
              text='"I cannot believe my results!"'
              label='Sarah, 27'
              path='/pricing'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-16.jpg'
              text='"I got wham in a matter of months"'
              label='Gary, 37'
              path='/pricing'
            />
            <CardItem
              src='images/img-17.jpg'
              text='"I finally achieved my long term fitness goals"'
              label='Fred, 36'
              path='/pricing'
            />
            <CardItem
              src='images/img-18.jpg'
              text='"I am in disbelief. It almost seems too good to be true"'
              label='Mary, 25'
              path='/pricing'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
