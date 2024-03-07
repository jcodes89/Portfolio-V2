'use client'
import React, {useRef} from 'react'
import gsap from 'gsap/gsap-core';
import { useGSAP } from "@gsap/react";
import HeroLink from '../HeroLink/HeroLink'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HeroSub = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const container = useRef();
  const tl =gsap.timeline()

  useGSAP(() => {
    tl.to('.links', {
      clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
      duration: 1,
      delay: 1,
      stagger: 1.5,
      ease: 'expo',
      display: 'flex', 
     
    })
    
  }, {scope: container})

  return (
    <section ref={container} className=' w-full h-[50%]'>
        <div className='hide '>
          <ul className=' heroSub grid grid-cols-1 w-full text-center h-fit px-3 py-0 text-gray-50 text-7xl md:grid-cols-2 md:gap-3 '>
            <HeroLink
              link='MY WORK'
              href='/work'
            />
            <HeroLink
              link='ABOUT'
              href='/about'
            />
            <HeroLink
              link='CONTACT'
              href='/contact'
            />
            <HeroLink
              link='RESUME'
              href='/resume'
            />
          </ul>
        </div>
      </section>
  )
}

export default HeroSub