'use client'
import React, {useRef as UseRef} from 'react'
import Image from 'next/image'
import img from '@/public/Images/profile2.jpg'
import { useGSAP as UseGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styles from '@/app/css/about.module.css'

const page = () => {
  const container = UseRef()
  gsap.registerPlugin(ScrollTrigger)

  UseGSAP(() => {
    const tl = gsap.timeline()
    tl.to('#aboutHead', {
      display: 'flex',
      visibility: 'visible',
      duration: 3,
      scale:1,
      ease: 'sine',
      stagger:3
    })
    .to('#aboutImg', {
      delay:2,
     ease: 'expo'
    })
    .to('#aboutInfo', {
      
    })
  }, {scope: container})

  return (
    <>
    <span className='h-[160vh] w-full bg-[url("../public/images/pawel-czerwinski-fRzUPSFnp04-unsplash.jpg")] bg-cover bg-center absolute z-10'/>
    <main ref={container} className='relative z-30 w-full h-full  flex flex-col  text-center top-16 lg:px-4  text-gray-50 lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:gap-3'>
    
      <div id='aboutHead' className={`${styles.aboutHeader} flex flex-col justify-center items-center  pb-4  mx-4  `}>
        <div className='aboutTitle p-4'>
          <h2 className='font-bold text-4xl lg:text-5xl'>About Me</h2>
        </div>
        <div className='aboutText text-left  p-4 rounded-md shadow-md shadow-primary '>
          <h3 className='text-xl md:text-2xl lg:text-2xl py-3'>I am a Web Developer based in Florida</h3>
          <p className='text-base md:text-lg lg:text-xl'>I created my first web site in 2021 and fell in love with the process.  I enjoy creating lasting unique experiences and continuing to gain knowledge and experience as a Web Developer.  </p>
        </div>
      </div>

      <div className=' flex justify-center items-center p-3'>
        <Image src={img} alt='image of Jeremy' id='aboutImg' className={`${styles.aboutImage} h-full w-auto rounded-md shadow-md shadow-primary `}/>
      </div>

      <div id='aboutInfo' className={`${styles.aboutStory} relative z-30 w-full h-full text-primary bg-gray-50  pt-4 p-4 lg:rounded-md lg:shadow-md lg:shadow-primary `}>
        <div className='text-center '>
          <h4 className='text-xl font-bold pb-4'>My Story</h4>
          <p className='text-left'>
            My journey as a Web Developer started back in 2021 when I first wanted to make my own website for my leather buisness.
            I was currently using squarespace but it lacked the simplistic nature which I wanted for a website. The main goal for my Davinch Leather website was to showcase
            my work and describe the process of how I create custom leather products.  This prompted me to start learning from Udemy and other sites which led me down the rabbit hole.  
          </p>
          <br/>
          <p className='text-left'>
            Looking back now, my Davinch website was nothing spectacular but building and creating 
            that website ignited a spark.  I have been constantly learning and growing since I started in 2021 and the passion to create has only grown.
            I am currently working as a Paramedic/Firefighter in Tampa, Fl but look forward to starting a career as a developer.
          </p>
        </div>
      </div>
      <div className={`${styles.aboutStory} w-full relative z-30 h-full text-gray-50 text-center bg-accent p-4 lg:rounded-md lg:shadow-md lg:shadow-primary lg:flex lg:flex-col `}>
        <div>
          <h5 className='text-xl font-bold pb-4'>
            When I am not coding
          </h5>
        </div>
        <div className=''>
          <ul>
            <li>Hanging with the Wife</li>
            <li>Longboarding</li>
            <li>Leather Working</li>
            <li>Knife Making</li>
            <li>Gaming on my NES and Gameboy</li>
            <li>Gameboy Restoration</li>
            <li>Working Out</li>
            <li>Paddle Boarding</li>
            <li>Fishing</li>
          </ul>
        </div>

      </div>

  
  
    </main>
    
   
    </>
  )
}

export default page