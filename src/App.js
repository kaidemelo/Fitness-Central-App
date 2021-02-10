import React from 'react';
import './App.css';
import Home from './components/Pages/HomePage/Home';
import SignUp from './components/Pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Pages/Testimonials/Testimonials';
import HowItWorks from './components/Pages/HowItWorks/HowItWorks';
import ScrollToTop from 'react-router-scroll-top';
import TermsOfService from './components/Pages/TermsOfService/TermsOfService';
import Pricing from './components/Pages/PricingPage/PricingPage';
import Team from './components/Pages/Team/Team';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <ScrollToTop>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/testimonials' component={Testimonials} />
        <Route path='/how-it-works' component={HowItWorks} />
        <Route path='/terms-of-service' component={TermsOfService} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/team' component={Team} />
        <Route path='/page-not-found' component={ErrorPage} />
      </Switch>
      <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
