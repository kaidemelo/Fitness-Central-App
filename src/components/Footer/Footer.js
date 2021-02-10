import React, { useEffect } from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import {
  FaHeartbeat,
  FaGooglePlay,
  FaAppStoreIos,
  FaGraduationCap,
  FaGithub,
  FaUniversity
} from 'react-icons/fa';

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
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Useful Links</h2>
            <Link to={{ pathname: "https://github.com/kaidemelo/Fitness-Central-App" }}
            target='_blank'
            >GitHub Repo</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/team'>Team</Link>
          </div>
          {/* <div className='footer-link-items'>
            <h2>Made With</h2>
            <Link to={{ pathname: "https://www.mysql.com/" }}
            target='_blank'
            >
            MySQL
            </Link>
            <Link to={{ pathname: "https://expressjs.com/" }}
            target='_blank'
            >
            Express.js
            </Link>
            <Link to={{ pathname: "https://nodejs.org/en/" }}
            target='_blank'
            >Node.js
            </Link>
            <Link to={{ pathname: "https://reactjs.org/" }}
            target='_blank'
            >
            React.js
            </Link>
          </div> */}
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/terms-of-service'>Terms of Service</Link>
            <Link to='/how-it-works'>How it works</Link>
            <Link to='/testimonials' >Testimonials</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <FaHeartbeat className='navbar-icon' />
              FITNESS CENTRAL
            </Link>
          </div>
          <small className='website-rights'>FITNESS CENTRAL © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://play.google.com/store/apps/" }}
              target='_blank'
              aria-label='Google Play Store'
            >
              <FaGooglePlay />
            </Link>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://apps.apple.com/" }}
              target='_blank'
              aria-label='App Store'
            >
              <FaAppStoreIos />
            </Link>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://www.gold.ac.uk/ug/bsc-computer-science/" }}
              target='_blank'
              aria-label='Degree Course Page'
            >
              <FaGraduationCap />
            </Link>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://www.gold.ac.uk/" }}
              target='_blank'
              aria-label='Goldsmiths University'
            >
              <FaUniversity />
            </Link>
            <Link
              className='social-icon-link'
              to={{ pathname: "https://github.com/kaidemelo/Fitness-Central-App" }}
              target='_blank'
              aria-label='GitHub Repo'
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
