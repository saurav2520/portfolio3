import React from 'react'
import TextChange from '../project/TextChange'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20' >
        <div className='md:w-2/4 md:pt-10 m-1'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter '><TextChange/></h1>
        <p className='text-sm md:text-2xl traking-tight '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dignissimos voluptate </p>
       <a href="https://drive.google.com/file/d/1i9Nx2AmuDf_Ox8qGO9nc1obDuAXU0xVG/view?usp=drive_link"> <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Resume</button></a>
        </div>
        <div><img src="./public/pic1.jpg" alt=""  className='max-h-100 mx-16 rounded-4xl bg-white '/></div>
      
    </div>
  )
}

export default Home
