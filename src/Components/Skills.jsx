import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaGoogle, FaAmazon, FaReact, FaAngular, FaNodeJs, FaJava } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'
import { SiMongodb } from 'react-icons/si'
import { PiStudentBold } from "react-icons/pi";
const Skills = () => {
  return (
    <div id="Skills" className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills</h1>
      <div className='flex flex-wrap items-center justify-around '>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaHtml5 color="#E34F26" size={50} />
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaCss3 color="#1572b6" size={50} />
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJs color="#F7DF1E" size={50} />
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaReact color="#61DAFB" size={50} />
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaAngular color="#E34F26" size={50} />
          </span>

          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaNodeJs color="#215732" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJava color="#007396" size={50} />
          </span>
        </div>
        <div>
          <div className='flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <PiStudentBold color="#4285F4" size={50} />
            <span className='text-white'>
              <h2 className='leading-tight font-semibold'>Edunet Foundation</h2>
              <p className='text-sm leading-tight font-thin'>Feb 2025 - March 2025 </p>
              <ul className='text-sm p-2'>
                <li>- work as Web Application Intern</li>
                <li>- Enhanced the development skills</li>
              </ul>
            </span>
          </div>

          <div className='flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <PiStudentBold color="#4285F4" size={50} />
            <span className='text-white'>
              <h2 className='leading-tight font-semibold '>Octanet Services pvt. ltd. </h2>
              <p className='text-sm leading-tight font-thin'>Jun 2024 - July 2024 </p>
              <ul className='text-sm p-2'>
                <li>- Work as Web Development Intern</li>
                <li>- working on HTML,CSS</li>
              </ul>
            </span>
          </div>

          {/* <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <FaGoogle color="#4285F4" size={50} />
            <span className='text-white'>
              <h2 className='leading-tight '>Software engineer,Google</h2>
              <p className='text-sm leading-tight font-thin'>Sept 2024 - present </p>
              <ul className='text-sm p-2'>
                <li>- Work as software developer</li>
                <li>- Senior Developer</li>
              </ul>
            </span>
          </div> */}
        </div>

      </div>
    </div>
  )
}

export default Skills
