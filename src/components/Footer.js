import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
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
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
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
