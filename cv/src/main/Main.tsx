import React from 'react';
import About from '../about/About.tsx';
import Avatar from '../avatar/Avatar.tsx';
import './Main.scss';
import Contacts from '../contacts/Contacts.tsx';
import Skills from '../skills/Skills.tsx';
import Langs from '../langs/Langs.tsx';
import Education from '../education/Education.tsx';
import Projects from '../projects/Projects.tsx';

function Main() {
  return (
    <main className='main'>
      <About/>
      <Avatar/>
      <Contacts/>
      <Skills/>
      <Langs/>
      <Education/>
      <Projects/>
    </main>
  )
}

export default Main;