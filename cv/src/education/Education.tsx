import React from 'react';
import './Education.scss';

const education = [
  {
    school: 'THE ROLLING SCOPES SCHOOL',
    course: 'NodeJS 2024 Q3',
    certificate: 'https://app.rs.school/certificate/7xakql66'
  },
  {
    school: 'THE ROLLING SCOPES SCHOOL',
    course: 'JavaScript/Front-end 2023Q4',
    certificate: 'https://app.rs.school/certificate/96efrz9x',
  }, 
  {
    school: 'THE ROLLING SCOPES SCHOOL',
    course: 'JS/FE Pre-School 2023Q2',
    certificate: 'https://app.rs.school/certificate/49dhonk1',
  },
  {
    school: 'Belorussian State Medical University',
    course: 'General Medicine (2016)',
  }
]

function Education() {
  return (
    <section id='education' className='education'>
      <h3> Education</h3>
      {
        education.map(item => (
          <div className='education-item'>
            <p>{item.school} / {item.course}</p>
            {
              item.certificate ? 
              <a href={item.certificate} target='_blank' rel="noreferrer">(certificate)</a>
              :
              null
            }
          </div>
        ))
      }

    </section>
  )
}

export default Education;