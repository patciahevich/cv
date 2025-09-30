import React from "react";
import "./Projects.scss";

const projects = [
  {
    name: "100 questions for couples",
    url: "https://github.com/patciahevich/you-and-me-game/tree/main/you-and-me",
    deploy: "https://you-and-me-game.netlify.app/",
  },
  {
    name: "Coffee House",
    url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    deploy: "https://patciahevich.github.io/coffee-house/home/",
  },
  {
    name: "Brooklyn Library",
    url: "https://images.pexels.com/photos/1046125/pexels-photo-1046125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    deploy: "https://patciahevich.github.io/library",
  },
  {
    name: "Snake (game project)",
    url: "https://images.pexels.com/photos/4096517/pexels-photo-4096517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    deploy: "https://patciahevich.github.io/snake/",
  },
  {
    name: "Audio Player",
    url: "https://images.pexels.com/photos/3755015/pexels-photo-3755015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    deploy: "https://patciahevich.github.io/audio-player",
  },
  {
    name: "Image Gallery",
    url: "https://images.pexels.com/photos/2372977/pexels-photo-2372977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    deploy: "https://patciahevich.github.io/image-gallery/",
  },
  {
    name: "Lawyer (project in deploy)",
    url: "https://images.pexels.com/photos/7841856/pexels-photo-7841856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    deploy: "https://advokatminska.by",
  },
  {
    name: "Battleship (WebSockets - backend part)",
    url: "https://images.pexels.com/photos/18429367/pexels-photo-18429367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    deploy: "https://github.com/patciahevich/battleship",
  },
  {
    name: "Fun Chat (WebSockets - frontend part)",
    url: "https://images.pexels.com/photos/6669782/pexels-photo-6669782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    deploy:
      "https://github.com/rolling-scopes-school/patciahevich-JSFE2023Q4/tree/fun-chat",
  },
  {
    name: "English Puzzles",
    url: "https://images.pexels.com/photos/11845543/pexels-photo-11845543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    deploy:
      "https://rolling-scopes-school.github.io/patciahevich-JSFE2023Q4/rss-puzzle/",
  },
  {
    name: "Simple CRUD API (NodeJS project)",
    url: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    deploy: "https://github.com/patciahevich/CRUD_API",
  },
  {
    name: "File Manager (NodeJS project)",
    url: "https://images.pexels.com/photos/4792286/pexels-photo-4792286.jpeg",
    deploy: "https://github.com/patciahevich/node-js-file_manager",
  },
  {
    name: "Memes Slider (CSS only project)",
    url: "https://images.pexels.com/photos/16259439/pexels-photo-16259439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    deploy:
      "https://patciahevich.github.io/cssMemeSlider/cssMemeSlider/index.html",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h3>Projects</h3>
      <div className="projects-wrapper">
        {projects.map((item, index) => (
          <a
            className={index % 2 === 0 ? "projects-item" : "projects-item odd"}
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundSize: "cover",
            }}
            href={item.deploy}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            <p className="project-link">{item.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
