import React from 'react';
import './Contacts.scss';

const contacts = [
  {
    id: 'address',
    text: 'Warsaw, Poland',
    link: 'https://www.google.pl/maps/place/Warsaw/@52.2328871,20.896617,11z/data=!3m1!4b1!4m6!3m5!1s0x471ecc669a869f01:0x72f0be2a88ead3fc!8m2!3d52.2296756!4d21.0122287!16zL20vMDgxbV8?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 'telegram',
    text: '@patsiahevich',
    link: 'https://t.me/patsiahevich',
  },
  {
    id: 'mail',
    text: 'zaprudskaya@gmail.com',
    link: 'mailto:zaprudskaya@gmail.com',
  },
  {
    id: 'linkedin',
    text: 'Volha Patciahevich',
    link: 'https://www.linkedin.com/in/volha-patciahevich',
  },
  {
    id: 'github',
    text: 'patciahevich',
    link: 'https://github.com/patciahevich',
  }
]

function Contacts() {
  return (
    <section id='contacts' className='contacts'>
      <h3> Contacts </h3>
      {
        contacts.map((item, index) => (
          <a className='contacts-item' href={item.link} target='_blank' rel="noreferrer" key={index}>
            <span id={item.id} className='contacts-icon'/>
            <span className='contacts-text'>{item.text}</span>
          </a>
        ))
      }

    </section>
  )
}

export default Contacts;