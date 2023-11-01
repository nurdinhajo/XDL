import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';

function Home() {
  return <h2>Home Page Content</h2>; // Create components or content for each route
}

function Services() {
  return <h2>Services Page Content</h2>;
}

function Drivers() {
  return <h2>Drivers Page Content</h2>;
}

function About() {
  return <h2>About Page Content</h2>;
}

function Contact() {
  return <h2>Contact Page Content</h2>;
}

function FAQs() {
  return <h2>FAQs Page Content</h2>;
}

function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/drivers" component={Drivers} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/FAQS" component={FAQs} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
