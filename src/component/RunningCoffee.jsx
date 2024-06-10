import React from 'react'
import { motion, reverseEasing } from 'framer-motion';
import Coffee from '../assets/runningCoffee.json';
import Lottie from 'react-lottie-player'

const RunningCoffee = () => {
  return (
    <motion.div
        // Initial position
    //   initial={{ x: -50 }}
      // Animate to this position
      whileInView={{ x: [-300, 300] }}
      // Transition settings
      transition={{ delay: 1.5, duration: 3, ease: "easeInOut", repeat:0}}
    >
        <Lottie
              loop
              animationData={Coffee}
              play
              className='w-[100%]'
            />
    </motion.div>
  )
}

export default RunningCoffee