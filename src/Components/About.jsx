import React from 'react'
import {IoArrowForward} from "react-icons/io5"

const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12' id="About">
        <div>
            <h2 className='text-2xl md:text-4xl font-bold '>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center justify-between'>
                <img className='md:h-80  h-60 rounded-3xl' src="../pic2.jpg" alt="" />

                <ul className='mx-10 py-5'>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis suscipit placeat eius neque natus aliquid est dolore atque laboriosam.</p>
                    </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Java Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis suscipit placeat eius neque natus aliquid est dolore atque laboriosam.</p>
                    </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Short story writer</h1>
                        <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis suscipit placeat eius neque natus aliquid est dolore atque laboriosam.</p>
                    </span>
                    </div>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default About
