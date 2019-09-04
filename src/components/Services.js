import React from 'react';

const Services = props => (
  <div className='service'>
    <i className={props.serviceIcon} />
    <div className='service-desc'>
      <h4>{props.serviceTitle}</h4>
      <p>{props.serviceDesc}</p>
    </div>
  </div>
);

export default Services;
