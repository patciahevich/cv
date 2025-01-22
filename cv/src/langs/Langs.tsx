import React from 'react';
import  './Langs.scss';

const langs = [
  {
    id: 'russian',
    level: 'native',
  },
  {
    id: 'belorussian',
    level: 'native',
  },
  {
    id: 'english',
    level: 'A2-B1',
  },
  {
    id: 'polish',
    level: 'A0-A1'
  }
 
]

function Langs() {
  return (
    <section className='langs'>
      <h3> Languages </h3>
      {
        langs.map(item => (
          <p className='lang-item'>
            <span id={item.id} className='lang-icon'/>
            <span className='lang-text'>{`${item.id} ( ${item.level} )`}</span>
          </p>
        ))
      }

    </section>
  )
}

export default Langs;