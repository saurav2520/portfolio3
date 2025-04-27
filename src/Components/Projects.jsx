import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white ' >
      <h1 className='text-2xl md:text-4xl text-white font-bold '>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-3 justify-center'>
        <ProjectCard
          title="Calculator"
          main="This is digital calculator which is fully functioned and developed using HTML,CSS and JavaScript"
          imgLink={"./assets/calc1.png"}
          hostUrl={"https://saurav2520.github.io/calculator1/"}
          codeUrl={"https://github.com/saurav2520/calculator1.git"}
        />

        <ProjectCard
          title="Flipcart clone"
          main="This is flipcart clone which is developed using HTML,CSS and JavaScript"
          imgLink={"../flip_clone1.png"}
          hostUrl={"https://saurav2520.github.io/flip_clone/"}
          codeUrl={"https://github.com/saurav2520/flip_clone.git"}
        />

        <ProjectCard
          title="world weather checker"
          main="This is world weather which is fully functioned and developing using HTML,CSS and JavaScript, uses a free weather api for data fetching"
          imgLink={"../world_wea.png"}
          hostUrl={"https://saurav2520.github.io/world_weather1/"}
          codeUrl={"https://github.com/saurav2520/calculator1.git"}
        />
      </div>

    </div>
  )
}

export default Projects
