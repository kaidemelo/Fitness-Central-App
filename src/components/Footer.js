import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Sign up to get special news and exclusive offers
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/login'>Create an Account</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>About</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Support</Link>
            <Link to='/'>Contact</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Useful Links</h2>
            <Link to='/'>Github</Link>
            <Link to='/'>React</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              FITNESS CENTRAL
              <i class='fas fa-heartbeat' />
            </Link>
          </div>
          <small class='website-rights'>FITNESS CENTRAL © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link googlestore'
              to={{ pathname: "https://play.google.com/store/apps/" }}
              target='_blank'
              aria-label='Google Play Store'
            >
              <i class='fab fa-google-play' />
            </Link>
            <Link
              class='social-icon-link appstore'
              to={{ pathname: "https://apps.apple.com/" }}
              target='_blank'
              aria-label='App Store'
            >
              <i class='fab fa-app-store-ios' />
            </Link>
            <Link
              class='social-icon-link coursepage'
              to={{ pathname: "https://www.gold.ac.uk/ug/bsc-computer-science/" }}
              target='_blank'
              aria-label='Degree Course Page'
            >
              <i class='fas fa-graduation-cap' />
            </Link>
            <Link
              class='social-icon-link goldsmiths'
              to={{ pathname: "https://www.gold.ac.uk/" }}
              target='_blank'
              aria-label='GoldSmiths Univeristy'
            >
              <i class='fas fa-university' />
            </Link>
            <Link
              class='social-icon-link github'
              to={{ pathname: "https://github.com/kaidemelo/Fitness-Central-App" }}
              target='_blank'
              aria-label='GitHub Repo'
            >
              <i class='fab fa-github' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
