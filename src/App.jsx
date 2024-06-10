import React from 'react'
import Lottie from 'react-lottie-player'
import backgroundpic from './assets/background.svg';
import Running from './component/RunningCoffee.jsx'
import AdrianPic from './assets/adrian.jpg'
import HeaderNav from './component/HeaderNav.jsx';
import AnimationFIrst from './assets/firstAnimation.json';
import CoffeeAnimation from './assets/coffeAnimation.json';
import HeroAnimation from './assets/hero.json';
import SwipeAnimation from './assets/swipe.json';
import { TypeAnimation } from 'react-type-animation';

const App = () => {
  return (
    <>
      <div
        className="w-full h-[100%] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundpic})` }}
      >
        <HeaderNav></HeaderNav>
        <div className='flex flex-col gap-24 items-center justify-center min-h-screen'>
          {/* <Lottie
              loop
              animationData={HeroAnimation}
              play
              className='w-[30%]'
            /> */}
            <div>
              <div className='flex gap-2 justify-center h-10 m-8 items-center'>
                <h1 className='text-[42px] font-bold text-mainWhite'>Adrian</h1>
                <h1 className='text-[42px] font-bold text-mainYellow'>Parco</h1>
              </div>
              <div className='flex flex-col text-[24px] mb-12 w-full px-10 h-32'>
                <h2 className=' text-mainWhite'>Experience in &nbsp;</h2>  
                <span className=' text-mainYellow'>
                    <TypeAnimation 
                      sequence={[
                        'Web Development',
                        1000,
                        'Web Design',
                        1000,
                        'Data Analytics',
                        1000,
                        'RPA Development',
                        1000
                      ]}
                      wrapper='span'
                      speed={200}
                      repeat={Infinity}/>
                  </span> 
                </div>
            </div>
          <Lottie
              loop
              animationData={SwipeAnimation}
              play
              className='w-[20%]'
            />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className=' rounded-full w-[60%] border-[6px] shadow-lg border-mainYellow'>
            <img src={AdrianPic} alt="" className='rounded-full'/>
          </div>
          <h2 className='w-[80%] text-[22px] mt-10 text-mainWhite text-center'>Tech enthusiast — always looking for ways to simplify my work.</h2>
          {/* <Lottie
            loop
            animationData={AnimationFIrst}
            play
            className='w-[70%]'
            /> */}
            <Running></Running>
          <div className='flex- flex-col text-[20px] m-10'>
            <div className='flex flex-col justify-start items-center'>
              <h1 className=' text-mainYellow font-semibold text-[36px] flex-1'>About Me</h1>
            </div>
            <p className=' text-mainWhite text-justify indent-5 mt-2'>I graduated with a degree in Computer Science from <span className=' text-mainTomato text-[24px] font-bold'> New Era University </span> on July 7, 2023. During my college years, I not only honed my programming and development skills but also developed my ability to connect with friends and teammates. The college years flew by, especially when the pandemic hit, and we transitioned to online classes, webinars, and seminars. During this period, I also completed a Bootcamp in Full Stack Development at <span className=' text-mainTomato text-[24px] font-bold'>KodeGo.</span></p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App