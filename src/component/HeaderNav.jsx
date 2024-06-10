import React from 'react'
import Logo from '../assets/logo.png'
import { FaLocationArrow } from "react-icons/fa";
import {motion} from 'framer-motion'

const Header = () => {
  
  return (
    
    <div className='flex justify-evenly items-center bg-mainWhite bg-opacity-25 shadow-2xl drop-shadow-md transition-shadow h-24 sticky top-0'>
      <div className=' flex flex-col w-12 gap-[8px]'>
        <span className='border-b-2 ml-4 rounded-lg'></span>
        <span className='border-b-2 rounded-lg'></span>
        <span className='border-b-2 mr-4 rounded-lg flex '></span>
      </div>
      <img src={Logo} alt="" className='w-24'/>
      <div className='flex border-b-2 h-8 gap-4'>
        <h3 className='text-mainWhite text-[20px]'>LET'S TALK</h3>
        <motion.div
        animate={{y: [0, -4, 0]}}
        transition={{duration: 1,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}>
          <FaLocationArrow className=' text-mainYellow' size={20}/>
        </motion.div>
      </div>
    </div>
  )
}

export default Header