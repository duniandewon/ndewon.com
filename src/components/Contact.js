import React from 'react';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-info-container'>
        <div className='contact-info'>
          <i class='fas fa-envelope'></i>
          <strong> E-mail</strong>
          <p>duniandwon@gmail.com</p>
        </div>
        <div className='contact-info'>
          <i class='fas fa-map-marker-alt'></i>
          <strong> Address</strong>
          <p>Pekalongan, Central Java - Indonesia.</p>
        </div>
      </div>
      <div className='contact-form'>
        <form action='' class='form'>
          <input
            class='form-control'
            type='text'
            placeholder='Name'
            name='name'
            id='contact-name'
            required
          />
          <input
            class='form-control'
            type='email'
            placeholder='E-mail'
            name='contact-email'
            id='contact-email'
            required
          />
          <input
            class='form-control'
            type='text'
            placeholder='Subject'
            name='contact-subject'
            id='contact-subject'
          />
          <textarea
            class='form-control'
            name='contact-message'
            id='contact-message'
            placeholder='Message...'
          ></textarea>

          <button className='btn btn-primary'>
            Send <i class='fas fa-paper-plane'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
