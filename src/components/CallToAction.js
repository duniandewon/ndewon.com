import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <section className='call-to-actoin'>
    <h3>Need to talk to somebody about your ideas?</h3>
    <Link to='/contact' className='btn btn-primary'>
      Contant me
    </Link>
  </section>
);

export default CallToAction;
