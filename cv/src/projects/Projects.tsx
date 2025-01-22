import React from 'react';
import './Projects.scss';

const projects = [
  {
    name: 'Coffee House',
    url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    deploy: 'https://patciahevich.github.io/coffee-house/home/',
  },
  {
    name: 'Brooklyn Library',
    url: 'https://images.pexels.com/photos/1046125/pexels-photo-1046125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    deploy: 'https://patciahevich.github.io/library',
  },
  {
    name: 'Snake (game project)',
    url: 'https://images.pexels.com/photos/4096517/pexels-photo-4096517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    deploy: 'https://patciahevich.github.io/snake/',
  }, 
  {
    name: 'Audio Player',
    url: 'https://images.pexels.com/photos/3755015/pexels-photo-3755015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    deploy: 'https://patciahevich.github.io/audio-player',
  }, 
  {
    name: 'Image Gallery', 
    url: 'https://images.pexels.com/photos/2372977/pexels-photo-2372977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    deploy: 'https://github.com/patciahevich/image-gallery',
  }, 
  {
    name: 'Lawyer (project in deploy)',
    url: 'https://images.pexels.com/photos/7841856/pexels-photo-7841856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    deploy: 'https://advokatminska.by',
  }
]

function Projects () {
  return (
    <section className='projects' id='projects'>
      <h3>Projects</h3>
      <div className='projects-wrapper'>
        {
          projects.map((item, index) => (
            <a  className={index % 2 === 0 ? 'projects-item' : 'projects-item odd'} style={{ backgroundImage: `url(${item.url})`, backgroundSize: 'cover' }}  href={item.deploy} target='_blank' rel="noreferrer">
              <p className='project-link' >{item.name}</p>
            </a>
          )
        )
        }
      </div>

    </section>
  )
}

export default Projects;