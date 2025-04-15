import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

const Footer = () => {
  return (
    <div id="footer" className='flex justify-around  bg-[#222942af] text-white p-10 md:p-12 items-center'>
        <div>
            {/* <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1> */}
            <h3 className='text-sm md:text-2xl mt-2 font-normal'>Feel free to reach out !</h3>
        </div>
      <ul className='text-sm md:text-xl'>
       <a href="mailto:sauravkumar70799@gmail.com"> <li className='flex gap-1 items-center'> <MdOutlineMail size={20} /> Mail</li></a>
      <a href="http://www.linkedin.com/in/saurav2520"><li className='flex gap-1 items-center'><CiLinkedin size={20}/>Linkedin</li></a>  
        <a href="https://github.com/saurav2520"><li className='flex gap-1 items-center'><FaGithub size={20}/>Github</li></a>
      </ul>
    </div>
  )
}

export default Footer
