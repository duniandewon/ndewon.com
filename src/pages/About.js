import React, { Fragment } from 'react';
import Baner from '../components/Baner';
import WhoAmI from '../components/WhoAmI';
import CallToAction from '../components/CallToAction';
import WhatIDo from '../components/WhatIDo';
import Services from '../components/Services';

const services = [
  {
    i: 'fas fa-laptop-code',
    h4: 'Web Development',
    p:
      'HTML, CSS, JavaScript (React, Node, Express, MongoDB)... You name it. I have it all covered!'
  },
  {
    i: 'fab fa-html5',
    h4: 'PSD to HTML',
    p:
      'Already have a beautiful web design? Contact Me and I will turn your design into fully responsive website.'
  },
  {
    i: 'fas fa-mobile-alt',
    h4: 'Mobile Development',
    p:
      'From native IOS & Android to cross platform JavaScript apps, our experts have it covered.'
  },
  {
    i: 'fab fa-wordpress-simple',
    h4: 'Wordpress',
    p:
      'Millions of website are built on top of Wordpress, yours can become the next one!'
  }
];

const About = () => (
  <Fragment>
    <Baner />
    <WhoAmI />
    <CallToAction />
    <WhatIDo />
    <section className='services'>
      {services.map((service, index) => (
        <Services
          key={index}
          serviceIcon={service.i}
          serviceTitle={service.h4}
          serviceDesc={service.p}
        />
      ))}
    </section>
  </Fragment>
);

export default About;
